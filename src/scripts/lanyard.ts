import type { LanyardData } from '../types';

const CONSTANTS = {
  WEBSOCKET_URL: 'wss://api.lanyard.rest/socket',
  HEARTBEAT_RATE: 1000 * 30,
  OPCODES: {
    INITIALIZE: 2,
    HEARTBEAT: 3,
  },
};

export const lanyard = (opts: {
  userId: string;
  presenceUpdate: (data: LanyardData) => void;
}) => {
  if (!('WebSocket' in window))
    console.warn(
      'idk why youre using ancient browser. i think its time to upgrade it eh?'
    );

  const socket = new WebSocket(CONSTANTS.WEBSOCKET_URL);
  socket.onopen = () => {
    socket.send(
      JSON.stringify({
        op: CONSTANTS.OPCODES.INITIALIZE,
        d: {
          subscribe_to_id: opts.userId,
        },
      })
    );

    setInterval(() => {
      socket.send(
        JSON.stringify({
          op: CONSTANTS.OPCODES.HEARTBEAT,
        })
      );
    }, CONSTANTS.HEARTBEAT_RATE);
  };

  socket.onmessage = ({ data }) => {
    const {
      t: event,
      d: lanyardResponse,
    }: { t: 'INIT_STATE' | 'PRESENCE_UPDATE'; d: LanyardData } =
      JSON.parse(data);

    if (event === 'INIT_STATE' || event === 'PRESENCE_UPDATE') {
      opts.presenceUpdate(lanyardResponse);
    }
  };
};

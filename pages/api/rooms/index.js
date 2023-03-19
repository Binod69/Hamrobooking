import nc from 'next-connect';

import { allRooms } from '../../../backend/controllers/controllers';

const handler = nc();
handler.get(allRooms);

export default handler;

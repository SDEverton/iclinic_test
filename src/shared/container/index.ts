import { container } from 'tsyringe';

import './providers';

import { PrescriptionsRepository } from '@modules/prescriptions/infra/typeorm/repositories/PrescriptionsRepository';
import { IPrescriptionsRepository } from '@modules/prescriptions/repositories/IPrescriptionsRepository';

container.registerSingleton<IPrescriptionsRepository>(
  'PrescriptionsRepository',
  PrescriptionsRepository
);

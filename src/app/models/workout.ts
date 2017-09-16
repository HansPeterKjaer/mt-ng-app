import { Exercise } from './exercise';
import { Protocol } from './protocol';

export class Workout {
	id: number;
	name: string;
	descr: string;
	diff: number;
	focus: number;
	protocol: Protocol;
	exercises: Array<Exercise> = [];
}
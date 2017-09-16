import { ExerciseImage } from './exercise-image';

export class Exercise {
	id: number;
	name: string;
	diff: number;
	focus: number;
	description: string;
	images: Array<ExerciseImage>;
}
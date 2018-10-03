import { UPDATE_MARKS } from '../constants/quize'

export const updateMarks = marks => {
	return {
		type: UPDATE_MARKS,
		payload: marks
	}
}
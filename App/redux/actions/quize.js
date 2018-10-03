import { UPDATE_MARKS, RESET_MARKS } from '../constants/quize'

export const updateMarks = (marks, ratings) => {
	return {
		type: UPDATE_MARKS,
		payload: marks,
		rating: ratings
	}
}

export const resetMarks = () => {
	return {
		type: RESET_MARKS
	}
}
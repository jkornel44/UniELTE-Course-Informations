export const ADD_COURSE = 'ADD_COURSE';
export const REMOVE_COURSE = 'REMOVE_COURSE';

export const addCourse = (course) => ({
    type: ADD_COURSE,
    payload: course
});

export const removeCourse = (course) => ({
    type: REMOVE_COURSE,
    payload: course
});

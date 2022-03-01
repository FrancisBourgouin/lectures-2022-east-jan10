const days = [
  {
    id: 1,
    name: "Monday",
    appointments: [1, 2],
    interviewers: [1, 2],
    spots: 1,
  },
];

const appointments = {
  1: {
    id: 1,
    time: "12pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: 1,
    },
  },
  2: {
    id: 2,
    time: "1pm",
    interview: null,
  },
};

const interviewers = {
  1: {
    id: 1,
    name: "Sylvia Palmer",
    avatar: "https://i.imgur.com/LpaY82x.png",
  },
  2: {
    id: 2,
    name: "Tori Malcolm",
    avatar: "https://i.imgur.com/Nmx0Qxo.png",
  },
};

const state = {
  day: "Monday",
  days,
  appointments,
  interviewers,
};

const countSpots = (state, day) => {
  const currentDay = state.days.find((dayItem) => dayItem.name === day);
  const appointmentIds = currentDay.appointments;

  const interviewsForTheDay = appointmentIds.map(
    (id) => state.appointments[id].interview
  );

  const emptyInterviewsForTheDay = interviewsForTheDay.filter((interview) => !interview);
  const spots = emptyInterviewsForTheDay.length;

  return spots;
};

// Will be used near or in bookInterview
// Make sure to not mutate the original array
// Maybe use the .findIndex method to replace properly the element
// Make sure to update the spots once the appointments object is updated

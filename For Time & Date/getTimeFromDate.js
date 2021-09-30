// This snippet can be used to get the time from a Dateobject as a string.

const getColonTimeFromDate = (date) => date.toTimeString().slice(0, 8);

getColonTimeFromDate(new Date()); // "08:38:00"

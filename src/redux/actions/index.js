export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const GET_JOBS = "GET_JOBS";

export const getJobsAction = (company) => {
  return async (dispatch, getState) => {
    console.log("GET STATE, cosa sei? Ecco:", getState());
    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?company=" + company);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
      } else {
        console.log("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

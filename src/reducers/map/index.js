import { dashboardActionTypes } from "../../actions_types";
const initialState = {
  data: [],
  locations: [],
  center: {
    lat: 59.329444,
    lng: 18.068611,
  },
  show: false,
  zoom: 14,
  loaded: true,
  infectionStatus: "",
};
const MapReducer = (state = initialState, action) => {
  switch (action.type) {
    case dashboardActionTypes.getHotspotData:
      return { ...state, loading: true };
    case dashboardActionTypes.hotspotDataReceived:
      return { ...state, data: action.json, loading: false };
    case dashboardActionTypes.addLocation:
      return {
        ...state,
        loading: true,
      };
    case dashboardActionTypes.locationAddedSucessfully:
      return {
        ...state,
        locations: state.locations.concat(action.json),
        loading: false,
      };
    case dashboardActionTypes.setCenter:
      return {
        ...state,
        center: action.payload,
        zoom: 16,
        loading: false,
      };
    case dashboardActionTypes.setInfectionStatus:
      return {
        ...state,
        infectionStatus: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default MapReducer;

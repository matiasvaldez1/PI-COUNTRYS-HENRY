
const initialState= {
  countries: [],
  countryDetail: [],
  activities:[],

}

export default function rootReducer(state = initialState, action) {

  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload
      }
    case "SEARCH_COUNTRY":
        return {
          ...state,
          countries: action.payload
        }
    case 'COUNTRY_DETAIL':
        return {
          ...state,
          countryDetail: action.payload
          }
/*     case "GET_ACTIVITIES":
        return {
          ...state,
          activities: action.payload,
          } */
    case "POST_ACTIVITY":
        return {
          ...state,
          activities: [...state.activities, action.payload],
          }
      default:
      return state
    }
  }
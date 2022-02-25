
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
          case "ORDERBYNAME":
            let sortedArr = action.payload === 'Ascendant' ?
            state.countries.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (b.name > a.name) {
                    return -1;
                }
                return 0;
            }) :
            state.countries.sort(function (a, b) {
                if (a.name > b.name) {
                    return -1;
                }
                if (b.name > a.name) {
                    return 1;
                }
                return 0;
            })
        return {
            ...state,
            countries: sortedArr
        }
        case "ORDERBYPOP":
            let sortedArr2 = action.payload === 'Ascendant population' ?
            state.countries.sort(function (a, b) {
                if (a.population > b.population) {
                    return 1;
                }
                if (b.population > a.population) {
                    return -1;
                }
                return 0;
            }) :
            state.countries.sort(function (a, b) {
                if (a.population > b.population) {
                    return -1;
                }
                if (b.population > a.population) {
                    return 1;
                }
                return 0;
            })
        return {
            ...state,
            countries: sortedArr2
        }
      default:
      return state
    }
  }
export function validateFirstName (str) {
    const regex = /[A-Za-z ,.'-]/g;
    if (regex.test(str)) {
        return true 
    } else {
        return false
    }
}

export function validateLastName (str) {
    const regex = /[A-Za-z ,.'-]/g;
    if (regex.test(str)) {
        return true 
    } else {
        return false
    }
}

export function validateMiddleName (str) {
    const regex = /[A-Za-z ,.'-]/g;
    if (regex.test(str)) {
        return true 
    } else {
        return false
    }
}

export function validateLegalEntity (str) {
    const regex = /[a-zA-Z0-9_ ]/g;
    if (regex.test(str)) {
        return true 
    } else {
        return false
    }
}

export function validateAddress (str) {
    const regex = /[a-zA-Z0-9_ ]/g;
    if (regex.test(str)) {
    return true 
    } else {
    return false
    }
}

export function validateCity (str) {
    const regex = /[a-zA-Z0-9_ ]/g;
    if (regex.test(str)) {
    return true 
    } else {
    return false
    }
}

export function validateState (str) {
    const regex = /[a-zA-Z]/g;
    if (regex.test(str)) {
    return true 
    } else {
    return false
    }
}

export function validateZip (str) {
    const regex = /^(\d{5})?$/g;
    if (regex.test(str)) {
    return true 
    } else {
    return false
    }
}

export function validateCountry (str) {
    const regex = /[a-zA-Z ]/g;
    if (regex.test(str)) {
    return true 
    } else {
    return false
    }
}

export function validateSSN (str) {
    const regex = /\d{3}[-]?\d{2}[-]?\d{4}/g;
    if (regex.test(str)) {
    return true 
    } else {
    return false
    }
}

export function validateOwnership (str) {
    const regex = /^([01])?([.]?\d{0,2})?$/g;
    if (regex.test(str)) {
    return true 
    } else {
    return false
    }
}

export function validateRole (str) {
    const regex = /[a-zA-Z ]/g;
    if (regex.test(str)) {
    return true 
    } else {
    return false
    }
}

export function validateField(type, value) {
    switch (type) {
      // legal formfields
      case 'firstName':
        return validateFirstName(value);
      case 'lastName':
        return validateLastName(value);
      case 'middleName':
        return validateMiddleName(value);
      case 'legalEntity':
        return validateLegalEntity(value);
      case 'legalEntityAddress':
        return validateAddress(value);
      case 'legalEntityCity':
        return validateCity(value);
      case 'legalEntityState':
        return validateState(value);
      case 'legalEntityZip':
        return validateZip(value);
      // beneficial formfields
      case 'address':
        return validateAddress(value);
      case 'city':
        return validateCity(value);
      case 'state':
        return validateState(value);
      case 'zip':
        return validateZip(value);
      case 'country':
        return validateCountry(value);
      case 'ssn':
        return validateSSN(value);
      case 'ownership':
          return validateOwnership(value);
      case 'role':
        return validateRole(value);
    }
  }


export const stateMap = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
}

export default { 
    validateField
}
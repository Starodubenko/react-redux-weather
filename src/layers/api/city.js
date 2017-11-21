// const suggestions = [
//     { label: 'Afghanistan' },
//     { label: 'Aland Islands' },
//     { label: 'Albania' },
//     { label: 'Algeria' },
//     { label: 'American Samoa' },
//     { label: 'Andorra' },
//     { label: 'Angola' },
//     { label: 'Anguilla' },
//     { label: 'Antarctica' },
//     { label: 'Antigua and Barbuda' },
//     { label: 'Argentina' },
//     { label: 'Armenia' },
//     { label: 'Aruba' },
//     { label: 'Australia' },
//     { label: 'Austria' },
//     { label: 'Azerbaijan' },
//     { label: 'Bahamas' },
//     { label: 'Bahrain' },
//     { label: 'Bangladesh' },
//     { label: 'Barbados' },
//     { label: 'Belarus' },
//     { label: 'Belgium' },
//     { label: 'Belize' },
//     { label: 'Benin' },
//     { label: 'Bermuda' },
//     { label: 'Bhutan' },
//     { label: 'Bolivia, Plurinational State of' },
//     { label: 'Bonaire, Sint Eustatius and Saba' },
//     { label: 'Bosnia and Herzegovina' },
//     { label: 'Botswana' },
//     { label: 'Bouvet Island' },
//     { label: 'Brazil' },
//     { label: 'British Indian Ocean Territory' },
//     { label: 'Brunei Darussalam' },
//   ];
const suggestions = [{
  id: '1',
  name: 'Moscow',
  degree: 7,
  wind: 5,
  pressure: 752,
},{
  id: '2',
  name: 'SPB',
  degree: -2,
  wind: 8,
  pressure: 730,
},{
  id: '3',
  name: 'SPB',
  degree: 3,
  wind: 8,
  pressure: 730,
},{
  id: '4',
  name: 'SPB',
  degree: -5,
  wind: 8,
  pressure: 730,
},{
  id: '5',
  name: 'Alma-ata',
  degree: 7,
  wind: 5,
  pressure: 752,
}];

export const fetchCities = (value) => {
    return new Promise((resolve, reject) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        let count = 0;
      
        const result = inputLength === 0
          ? []
          : suggestions.filter(suggestion => {
              const keep =
                count < 5 && suggestion.name.toLowerCase().slice(0, inputLength) === inputValue;
      
              if (keep) {
                count += 1;
              }
      
              return keep;
            });

        setTimeout(() => resolve(result), 0);
    })
}
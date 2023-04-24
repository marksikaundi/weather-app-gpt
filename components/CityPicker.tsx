"use client";
import { Country, City } from 'country-state-city'
import Select from 'react-select';

const options = Country.getAllCountries().map(Country => ({
    value: {
        latitude: Country.latitude,
        longitude: Country.longitude,
        isoCode: Country.isoCode,
    },
    label: Country.name,
}))

function CityPicker() {
  return (
    <div>
      <Select 
      options={options}
      />
    </div>
  )
}

export default CityPicker

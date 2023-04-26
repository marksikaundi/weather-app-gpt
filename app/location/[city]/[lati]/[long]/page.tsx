type Props = {
    params: {
        city: string;
        lati: string;
        long: string;
    }
}



function WeatherPage({params: {city, lati, long}}: Props) {
  return (
    <div>
      Welcome to Weather page:{city} {lati} {long}
    </div>
  )
}

export default WeatherPage

// resumed
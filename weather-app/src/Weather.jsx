import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Typography, Grid, Paper, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Create a custom theme for the app
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff4081",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h4: {
      fontWeight: 600,
    },
    body1: {
      fontWeight: 500,
    },
  },
});

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    if (!city) return;

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("City not found");
    }
  };

  // Determine background color based on weather condition
  const getBackgroundColor = (weatherType) => {
    switch (weatherType) {
      case "Clear":
        return "#87CEEB"; // Sky blue for clear weather
      case "Clouds":
        return "#B0C4DE"; // Light gray for cloudy weather
      case "Rain":
        return "#1E3A8A"; // Dark blue for rainy weather
      case "Drizzle":
        return "#00BFFF"; // Light blue for drizzle
      case "Thunderstorm":
        return "#4B0082"; // Indigo for thunderstorms
      case "Snow":
        return "#F0F8FF"; // Snowy background (light cyan)
      case "Mist":
        return "#D3D3D3"; // Misty weather (light gray)
      case "Haze":
        return "#F5F5DC"; // Beige for hazy weather
      case "Dust":
        return "#D2B48C"; // Tan for dusty weather
      case "Fog":
        return "#A9A9A9"; // Dark gray for foggy weather
      default:
        return "#F5F5F5"; // Default background color
    }
  };

  // Get dynamic card style based on weather condition
  const getCardStyle = (weatherType) => {
    switch (weatherType) {
      case "Clear":
        return { backgroundColor: "#FFFFFF" }; // White for clear weather
      case "Clouds":
        return { backgroundColor: "#E0E0E0" }; // Light gray for cloudy
      case "Rain":
        return { backgroundColor: "#2D3748" }; // Dark for rain
      case "Drizzle":
        return { backgroundColor: "#ADD8E6" }; // Light blue for drizzle
      case "Thunderstorm":
        return { backgroundColor: "#5A2D9B" }; // Purple for thunderstorms
      case "Snow":
        return { backgroundColor: "#E0FFFF" }; // Snowy light cyan background
      case "Mist":
        return { backgroundColor: "#DCDCDC" }; // Misty light gray
      case "Haze":
        return { backgroundColor: "#F5F5DC" }; // Beige background
      case "Dust":
        return { backgroundColor: "#D2B48C" }; // Tan for dusty weather
      case "Fog":
        return { backgroundColor: "#A9A9A9" }; // Dark gray for foggy weather
      default:
        return { backgroundColor: "#FFFFFF" };
    }
  };

  // Get dynamic heading style based on weather type
  const getHeadingStyle = (weatherType) => {
    switch (weatherType) {
      case "Clear":
        return { color: "#1976d2", fontWeight: 700 }; // Blue for clear weather
      case "Clouds":
        return { color: "#607d8b", fontWeight: 700 }; // Grayish blue for cloudy
      case "Rain":
        return { color: "#ffffff", fontWeight: 700 }; // White for rainy weather
      case "Drizzle":
        return { color: "#00bfff", fontWeight: 700 }; // Light blue for drizzle
      case "Thunderstorm":
        return { color: "#ff4081", fontWeight: 700 }; // Pink for thunderstorm
      case "Snow":
        return { color: "#4682b4", fontWeight: 700 }; // Steel blue for snow
      case "Mist":
        return { color: "#9e9e9e", fontWeight: 700 }; // Light gray for mist
      case "Haze":
        return { color: "#8b4513", fontWeight: 700 }; // Brown for haze
      case "Dust":
        return { color: "#d2691e", fontWeight: 700 }; // Chocolate brown for dust
      case "Fog":
        return { color: "#a9a9a9", fontWeight: 700 }; // Gray for fog
      default:
        return { color: "#1976d2", fontWeight: 700 }; // Default blue
    }
  };

  // Get dynamic button style based on weather type
  const getButtonStyle = (weatherType) => {
    switch (weatherType) {
      case "Clear":
        return {
          backgroundColor: "#1976d2",
          "&:hover": { backgroundColor: "#1565c0" },
        }; // Blue button
      case "Clouds":
        return {
          backgroundColor: "#607d8b",
          "&:hover": { backgroundColor: "#455a64" },
        }; // Grayish blue button
      case "Rain":
        return {
          backgroundColor: "#1e3a8a",
          "&:hover": { backgroundColor: "#1c2c6d" },
        }; // Dark blue button
      case "Drizzle":
        return {
          backgroundColor: "#00bfff",
          "&:hover": { backgroundColor: "#0099cc" },
        }; // Light blue button
      case "Thunderstorm":
        return {
          backgroundColor: "#ff4081",
          "&:hover": { backgroundColor: "#f50057" },
        }; // Pink button
      case "Snow":
        return {
          backgroundColor: "#4682b4",
          "&:hover": { backgroundColor: "#3b6e8a" },
        }; // Steel blue button
      case "Mist":
        return {
          backgroundColor: "#9e9e9e",
          "&:hover": { backgroundColor: "#757575" },
        }; // Gray button
      case "Haze":
        return {
          backgroundColor: "#8b4513",
          "&:hover": { backgroundColor: "#6a2f10" },
        }; // Brown button
      case "Dust":
        return {
          backgroundColor: "#d2691e",
          "&:hover": { backgroundColor: "#cd5c43" },
        }; // Chocolate button
      case "Fog":
        return {
          backgroundColor: "#a9a9a9",
          "&:hover": { backgroundColor: "#808080" },
        }; // Gray button
      default:
        return {
          backgroundColor: "#1976d2",
          "&:hover": { backgroundColor: "#1565c0" },
        }; // Default blue button
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: weatherData
            ? getBackgroundColor(weatherData.weather[0].main)
            : "#f5f5f5",
          padding: 2,
          transition: "background-color 0.3s ease-in-out",
        }}
      >
        <Paper
          elevation={6}
          sx={{
            width: 350,
            padding: 3,
            textAlign: "center",
            borderRadius: 3,
            ...getCardStyle(weatherData?.weather[0].main),
            transition: "background-color 0.3s ease-in-out",
          }}
        >
          <Typography
            variant="h4"
            sx={getHeadingStyle(weatherData?.weather[0].main)}
            gutterBottom
          >
            Weather Forecast
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <TextField
              label="Enter city"
              variant="outlined"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              sx={{
                width: "70%",
                marginRight: 2,
                backgroundColor: "#f0f0f0",
                borderRadius: 1,
              }}
            />
            <Button
              variant="contained"
              onClick={fetchData}
              sx={getButtonStyle(weatherData?.weather[0].main)}
            >
              Get Weather
            </Button>
          </Box>

          {weatherData && (
            <>
              {/* Weather Icon */}
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                    marginBottom: "16px",
                    transition: "all 0.3s ease",
                  }}
                />
              </Box>

              {/* Temperature and Description */}
              <Typography variant="h5" color="primary" gutterBottom>
                {weatherData.main.temp}°C
              </Typography>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                {weatherData.weather[0].description}
              </Typography>

              {/* Weather Details Grid */}
              <Grid container spacing={2} sx={{ marginTop: 2 }}>
                <Grid item xs={6}>
                  <Typography variant="body2" color="textSecondary">
                    Feels Like
                  </Typography>
                  <Typography variant="body1">
                    {weatherData.main.feels_like}°C
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="textSecondary">
                    Wind
                  </Typography>
                  <Typography variant="body1">
                    {weatherData.wind.speed} m/s
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="textSecondary">
                    Humidity
                  </Typography>
                  <Typography variant="body1">
                    {weatherData.main.humidity}%
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="textSecondary">
                    Pressure
                  </Typography>
                  <Typography variant="body1">
                    {weatherData.main.pressure} hPa
                  </Typography>
                </Grid>
              </Grid>
            </>
          )}
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default Weather;

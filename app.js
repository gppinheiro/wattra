// Enhanced Application Data with Portugal & Spain Context
const appData = {
  // Data Center Context - Multi-site architecture
  "dataCenterContext": {
    "currentSite": {
      "id": "feup",
      "name": "FEUP",
      "fullName": "Faculdade de Engenharia da Universidade do Porto",
      "location": "Porto, Portugal",
      "subdivision": {
        "id": "redes-dados",
        "name": "Redes e Dados",
        "type": "department"
      },
      "metadata": {
        "capacity": "500 kW",
        "pue": 1.42,
        "established": "1988",
        "contact": "datacenter@fe.up.pt"
      }
    },
    "availableSites": [
      {
        "id": "feup",
        "name": "FEUP",
        "fullName": "Faculdade de Engenharia da Universidade do Porto",
        "location": "Porto, Portugal",
        "subdivisions": [
          { "id": "redes-dados", "name": "Redes e Dados", "type": "department" },
          { "id": "desenvolvimento", "name": "Desenvolvimento", "type": "department" },
          { "id": "servicos", "name": "Serviços", "type": "department" }
        ]
      },
      {
        "id": "fcup",
        "name": "FCUP",
        "fullName": "Faculdade de Ciências da Universidade do Porto",
        "location": "Porto, Portugal",
        "subdivisions": [
          { "id": "redes-dados", "name": "Redes e Dados", "type": "department" },
          { "id": "desenvolvimento", "name": "Desenvolvimento", "type": "department" }
        ]
      },
      {
        "id": "reitoria",
        "name": "Reitoria",
        "fullName": "Reitoria da Universidade do Porto",
        "location": "Porto, Portugal",
        "subdivisions": [
          { "id": "redes-dados", "name": "Redes e Dados", "type": "department" },
          { "id": "servicos", "name": "Serviços", "type": "department" }
        ]
      }
    ],
    "industryProfile": {
      "type": "university",
      "name": "University Data Center",
      "modules": ["academic-research", "administrative-services", "student-services"],
      "reportTemplates": ["esg-compliance", "research-impact", "operational-efficiency"]
    }
  },
  "marketContext": {
    "region": "Portugal & Spain Energy Markets",
    "currency": "EUR",
    "averageGridRate": 0.095,
    "peakHours": "18:00-22:00",
    "offPeakHours": "02:00-06:00"
  },
  "realTimeData": {
    "totalConsumption": 2847.5,
    "energyCost": 1203.85,
    "carbonEmissions": 1895.2,
    "currentProduction": 1956.3,
    "pue": 1.42,
    "efficiencyScore": 87.3,
    "lastUpdate": "2025-09-19T10:09:00Z"
  },
  // Granular Consumption Monitoring - Machine and Outlet Level
  "granularConsumption": {
    "zones": [
      {
        "id": "zone-1",
        "name": "Server Room A",
        "type": "server_room",
        "totalConsumption": 1250.5,
        "machines": [
          {
            "id": "machine-1",
            "name": "Rack 01 - Server Cluster",
            "type": "server_rack",
            "consumption": 450.2,
            "outlets": [
              { "id": "outlet-1-1", "name": "PDU 01", "consumption": 225.1, "status": "active" },
              { "id": "outlet-1-2", "name": "PDU 02", "consumption": 225.1, "status": "active" }
            ],
            "status": "active"
          },
          {
            "id": "machine-2",
            "name": "Rack 02 - Storage Array",
            "type": "storage",
            "consumption": 320.8,
            "outlets": [
              { "id": "outlet-2-1", "name": "PSU 01", "consumption": 160.4, "status": "active" },
              { "id": "outlet-2-2", "name": "PSU 02", "consumption": 160.4, "status": "active" }
            ],
            "status": "active"
          },
          {
            "id": "machine-3",
            "name": "Rack 03 - Network Equipment",
            "type": "network",
            "consumption": 479.5,
            "outlets": [
              { "id": "outlet-3-1", "name": "Main Switch", "consumption": 280.2, "status": "active" },
              { "id": "outlet-3-2", "name": "Router Cluster", "consumption": 199.3, "status": "active" }
            ],
            "status": "active"
          }
        ],
        "groups": [
          {
            "id": "group-compute",
            "name": "Compute Resources",
            "type": "department",
            "consumption": 770.1,
            "machineIds": ["machine-1"]
          },
          {
            "id": "group-storage",
            "name": "Storage Resources",
            "type": "department",
            "consumption": 320.8,
            "machineIds": ["machine-2"]
          },
          {
            "id": "group-network",
            "name": "Network Infrastructure",
            "type": "department",
            "consumption": 479.5,
            "machineIds": ["machine-3"]
          }
        ]
      },
      {
        "id": "zone-2",
        "name": "Server Room B",
        "type": "server_room",
        "totalConsumption": 950.3,
        "machines": [
          {
            "id": "machine-4",
            "name": "Rack 04 - Backup Servers",
            "type": "backup",
            "consumption": 450.8,
            "outlets": [
              { "id": "outlet-4-1", "name": "Backup PDU 01", "consumption": 225.4, "status": "active" },
              { "id": "outlet-4-2", "name": "Backup PDU 02", "consumption": 225.4, "status": "active" }
            ],
            "status": "active"
          },
          {
            "id": "machine-5",
            "name": "Rack 05 - Development Servers",
            "type": "development",
            "consumption": 499.5,
            "outlets": [
              { "id": "outlet-5-1", "name": "Dev PDU 01", "consumption": 249.75, "status": "active" },
              { "id": "outlet-5-2", "name": "Dev PDU 02", "consumption": 249.75, "status": "active" }
            ],
            "status": "active"
          }
        ],
        "groups": [
          {
            "id": "group-backup",
            "name": "Backup Systems",
            "type": "service",
            "consumption": 450.8,
            "machineIds": ["machine-4"]
          },
          {
            "id": "group-development",
            "name": "Development Environment",
            "type": "department",
            "consumption": 499.5,
            "machineIds": ["machine-5"]
          }
        ]
      },
      {
        "id": "zone-3",
        "name": "Cooling & Infrastructure",
        "type": "infrastructure",
        "totalConsumption": 646.7,
        "machines": [
          {
            "id": "machine-6",
            "name": "HVAC System",
            "type": "cooling",
            "consumption": 450.2,
            "outlets": [
              { "id": "outlet-6-1", "name": "HVAC Unit 01", "consumption": 225.1, "status": "active" },
              { "id": "outlet-6-2", "name": "HVAC Unit 02", "consumption": 225.1, "status": "active" }
            ],
            "status": "active"
          },
          {
            "id": "machine-7",
            "name": "UPS Systems",
            "type": "power",
            "consumption": 196.5,
            "outlets": [
              { "id": "outlet-7-1", "name": "UPS Main", "consumption": 98.25, "status": "active" },
              { "id": "outlet-7-2", "name": "UPS Backup", "consumption": 98.25, "status": "active" }
            ],
            "status": "active"
          }
        ],
        "groups": [
          {
            "id": "group-cooling",
            "name": "Cooling Systems",
            "type": "infrastructure",
            "consumption": 450.2,
            "machineIds": ["machine-6"]
          },
          {
            "id": "group-power",
            "name": "Power Infrastructure",
            "type": "infrastructure",
            "consumption": 196.5,
            "machineIds": ["machine-7"]
          }
        ]
      }
    ]
  },
  "timeBasedData": {
    "hourly": {
      "consumption": 2847.5,
      "cost": 1203.85,
      "emissions": 1895.2,
      "production": 1956.3,
      "pue": 1.42,
      "efficiency": 87.3,
      "trend": { "consumption": "+2.3%", "cost": "+1.8%", "emissions": "-5.2%", "production": "+8.4%", "pue": "-0.03", "efficiency": "+1.2%" }
    },
    "daily": {
      "consumption": 68340,
      "cost": 28895,
      "emissions": 45486,
      "production": 47024,
      "pue": 1.38,
      "efficiency": 89.1,
      "trend": { "consumption": "+3.1%", "cost": "+2.5%", "emissions": "-4.8%", "production": "+6.2%", "pue": "-0.05", "efficiency": "+2.1%" }
    },
    "monthly": {
      "consumption": 2050200,
      "cost": 866585,
      "emissions": 1365834,
      "production": 1411720,
      "pue": 1.35,
      "efficiency": 91.5,
      "trend": { "consumption": "+1.8%", "cost": "+1.2%", "emissions": "-6.5%", "production": "+9.1%", "pue": "-0.08", "efficiency": "+3.8%" }
    },
    "yearly": {
      "consumption": 24602400,
      "cost": 10399020,
      "emissions": 16400160,
      "production": 16940640,
      "pue": 1.32,
      "efficiency": 93.8,
      "trend": { "consumption": "+0.9%", "cost": "-2.3%", "emissions": "-12.8%", "production": "+15.4%", "pue": "-0.12", "efficiency": "+6.2%" }
    }
  },
  "savingsProjections": {
    "1month": {
      "total": 6302,
      "breakdown": {
        "energyOptimization": 2411,
        "workloadScheduling": 1538,
        "storageUtilization": 1303,
        "contractOptimization": 1050
      },
      "roi": "8.2%",
      "carbonReduction": 5200,
      "forecastReliability": {
        "confidence": 95,
        "status": "reliable",
        "method": "statistical_forecast",
        "warning": null
      }
    },
    "6months": {
      "total": 37812,
      "breakdown": {
        "energyOptimization": 14466,
        "workloadScheduling": 9225,
        "storageUtilization": 7816,
        "contractOptimization": 6305
      },
      "roi": "12.8%",
      "carbonReduction": 31200,
      "forecastReliability": {
        "confidence": 85,
        "status": "moderate",
        "method": "statistical_forecast",
        "warning": "Forecast confidence decreases with longer timeframes"
      }
    },
    "1year": {
      "total": 75632,
      "breakdown": {
        "energyOptimization": 28930,
        "workloadScheduling": 18450,
        "storageUtilization": 15632,
        "contractOptimization": 12620
      },
      "roi": "15.4%",
      "carbonReduction": 62400,
      "forecastReliability": {
        "confidence": 70,
        "status": "low",
        "method": "extrapolated_forecast",
        "warning": "Forecasts beyond 1 year have reduced reliability. Use for planning purposes only."
      }
    },
    "2years": {
      "total": 160840,
      "breakdown": {
        "energyOptimization": 61520,
        "workloadScheduling": 39230,
        "storageUtilization": 33250,
        "contractOptimization": 26840
      },
      "roi": "18.9%",
      "carbonReduction": 132800,
      "forecastReliability": {
        "confidence": 55,
        "status": "unreliable",
        "method": "projected_estimate",
        "warning": "Forecasts beyond 2 years are highly unreliable. Based on current trends and may not reflect future changes."
      }
    },
    "5years": {
      "total": 445280,
      "breakdown": {
        "energyOptimization": 170450,
        "workloadScheduling": 108650,
        "storageUtilization": 92130,
        "contractOptimization": 74050
      },
      "roi": "24.7%",
      "carbonReduction": 367200,
      "forecastReliability": {
        "confidence": 35,
        "status": "unreliable",
        "method": "scenario_estimate",
        "warning": "Forecasts beyond 5 years are highly speculative and should be used only for long-term planning scenarios."
      }
    }
  },
  // Enhanced Energy Providers with Max MW, Hybrid Tariffs, and AlphaEnergy
  "energyProviders": [
    {
      "id": 1,
      "name": "EDP Renewables",
      "type": "Solar",
      "country": "Portugal",
      "logo": "☀️",
      "fixedPrice": 0.045,
      "marketPrice": 0.048,
      "hybridPrice": 0.046,
      "hasHybridTariff": true,
      "reliability": 98.5,
      "renewablePercent": 100,
      "capacity": 1200,
      "maxMW": 5,
      "isBestValue": false,
      "tariffTypes": ["Fixed", "Market", "Hybrid"]
    },
    {
      "id": 2,
      "name": "Iberdrola Wind", 
      "type": "Wind",
      "country": "Spain",
      "logo": "💨",
      "fixedPrice": 0.052,
      "marketPrice": 0.055,
      "hybridPrice": 0.053,
      "hasHybridTariff": true,
      "reliability": 96.8,
      "renewablePercent": 100,
      "capacity": 800,
      "maxMW": 3,
      "isBestValue": false,
      "tariffTypes": ["Fixed", "Market", "Hybrid"]
    },
    {
      "id": 3,
      "name": "REN Grid",
      "type": "Grid", 
      "country": "Portugal",
      "logo": "⚡",
      "fixedPrice": 0.095,
      "marketPrice": 0.089,
      "hybridPrice": 0.092,
      "hasHybridTariff": true,
      "reliability": 99.8,
      "renewablePercent": 35,
      "capacity": 2000,
      "maxMW": 10,
      "isBestValue": false,
      "tariffTypes": ["Fixed", "Market", "Hybrid"]
    },
    {
      "id": 4,
      "name": "Galp Energy Storage",
      "type": "Battery",
      "country": "Portugal", 
      "logo": "🔋",
      "fixedPrice": 0.038,
      "marketPrice": 0.041,
      "hybridPrice": 0.039,
      "hasHybridTariff": true,
      "reliability": 94.2,
      "renewablePercent": 0,
      "capacity": 500,
      "maxMW": 2,
      "isBestValue": true,
      "tariffTypes": ["Fixed", "Market", "Hybrid"]
    },
    {
      "id": 5,
      "name": "AlphaEnergy",
      "type": "Hybrid Renewable",
      "country": "Portugal",
      "logo": "⚡",
      "fixedPrice": 0.042,
      "marketPrice": 0.044,
      "hybridPrice": 0.043,
      "hasHybridTariff": true,
      "reliability": 97.5,
      "renewablePercent": 85,
      "capacity": 1500,
      "maxMW": 7,
      "isBestValue": false,
      "tariffTypes": ["Fixed", "Market", "Hybrid"],
      "description": "Premium hybrid provider with advanced renewable integration"
    }
  ],
  // MIBEL Price Tracking and Forecasts
  "mibelPrices": {
    "current": {
      "price": 89.50,
      "pricePerKWh": 0.0895,
      "unit": "€/MWh",
      "timestamp": (new Date()).toISOString(),
      "market": "MIBEL",
      "country": "Iberian Peninsula",
      "source": "OMIE"
    },
    "hourly": [
      { "hour": 0, "price": 82.30, "forecast": true },
      { "hour": 1, "price": 78.50, "forecast": true },
      { "hour": 2, "price": 75.20, "forecast": true },
      { "hour": 3, "price": 72.10, "forecast": true },
      { "hour": 4, "price": 70.50, "forecast": true },
      { "hour": 5, "price": 68.90, "forecast": true },
      { "hour": 6, "price": 71.20, "forecast": true },
      { "hour": 7, "price": 85.40, "forecast": true },
      { "hour": 8, "price": 92.60, "forecast": true },
      { "hour": 9, "price": 98.20, "forecast": true },
      { "hour": 10, "price": 105.50, "forecast": true },
      { "hour": 11, "price": 112.30, "forecast": true },
      { "hour": 12, "price": 118.90, "forecast": true },
      { "hour": 13, "price": 125.40, "forecast": true },
      { "hour": 14, "price": 128.20, "forecast": true },
      { "hour": 15, "price": 124.80, "forecast": true },
      { "hour": 16, "price": 118.50, "forecast": true },
      { "hour": 17, "price": 115.20, "forecast": true },
      { "hour": 18, "price": 122.60, "forecast": true },
      { "hour": 19, "price": 130.40, "forecast": true },
      { "hour": 20, "price": 135.80, "forecast": true },
      { "hour": 21, "price": 128.50, "forecast": true },
      { "hour": 22, "price": 115.30, "forecast": true },
      { "hour": 23, "price": 95.60, "forecast": true }
    ],
    "daily": {
      "average": 105.40,
      "min": 68.90,
      "max": 135.80,
      "date": (new Date()).toISOString().split('T')[0]
    },
    "trend": {
      "direction": "increasing",
      "percentageChange": 3.2,
      "period": "24h"
    }
  },
  "mibelForecast": {
    "shortTerm": {
      "horizon": "24-48 hours",
      "method": "Day-ahead market (OMIE)",
      "confidence": 85,
      "prices": [
        { "date": "2025-02-11", "average": 98.50, "min": 72.00, "max": 128.00, "volatility": "medium" },
        { "date": "2025-02-12", "average": 105.20, "min": 75.50, "max": 135.50, "volatility": "high" }
      ]
    },
    "mediumTerm": {
      "horizon": "7 days",
      "method": "Market forecast with ML",
      "confidence": 72,
      "prices": [
        { "date": "2025-02-11", "average": 98.50, "min": 72.00, "max": 128.00 },
        { "date": "2025-02-12", "average": 105.20, "min": 75.50, "max": 135.50 },
        { "date": "2025-02-13", "average": 102.80, "min": 74.00, "max": 132.00 },
        { "date": "2025-02-14", "average": 108.40, "min": 78.00, "max": 138.00 },
        { "date": "2025-02-15", "average": 95.60, "min": 70.00, "max": 120.00 },
        { "date": "2025-02-16", "average": 92.30, "min": 68.00, "max": 115.00 },
        { "date": "2025-02-17", "average": 99.10, "min": 72.00, "max": 125.00 }
      ]
    },
    "longTerm": {
      "horizon": "30 days",
      "method": "Statistical modeling with weather integration",
      "confidence": 58,
      "weeklyAverage": [
        { "week": 1, "average": 103.50, "trend": "stable" },
        { "week": 2, "average": 98.20, "trend": "decreasing" },
        { "week": 3, "average": 107.80, "trend": "increasing" },
        { "week": 4, "average": 95.40, "trend": "decreasing" }
      ]
    },
    "forecastSources": [
      {
        "name": "OMIE Day-ahead Market",
        "type": "official",
        "horizon": "24h",
        "updateFrequency": "daily",
        "apiAvailable": true
      },
      {
        "name": "AleaSoft Forecast",
        "type": "commercial",
        "horizon": "10 days",
        "updateFrequency": "daily",
        "apiAvailable": true
      },
      {
        "name": "Internal ML Model",
        "type": "custom",
        "horizon": "7-30 days",
        "updateFrequency": "hourly",
        "apiAvailable": false
      }
    ],
    "historicalData": [],
    "accuracyMetrics": {
      "current": {
        "shortTerm": {
          "accuracy": "87.5",
          "mape": "8.2",
          "mae": "7.5",
          "rmse": "9.8",
          "dataPoints": 48
        },
        "mediumTerm": {
          "accuracy": "78.3",
          "mape": "12.5",
          "mae": "11.2",
          "rmse": "14.5",
          "dataPoints": 168
        }
      },
      "historical": [
        {
          "date": "2025-02-04",
          "metrics": {
            "shortTerm": { "accuracy": "85.2", "mape": "9.1", "mae": "8.2", "rmse": "10.5", "dataPoints": 48 },
            "mediumTerm": { "accuracy": "76.8", "mape": "13.2", "mae": "12.1", "rmse": "15.3", "dataPoints": 168 }
          }
        },
        {
          "date": "2025-02-05",
          "metrics": {
            "shortTerm": { "accuracy": "86.1", "mape": "8.8", "mae": "7.9", "rmse": "10.2", "dataPoints": 48 },
            "mediumTerm": { "accuracy": "77.2", "mape": "12.9", "mae": "11.8", "rmse": "15.0", "dataPoints": 168 }
          }
        },
        {
          "date": "2025-02-06",
          "metrics": {
            "shortTerm": { "accuracy": "88.3", "mape": "7.9", "mae": "7.2", "rmse": "9.5", "dataPoints": 48 },
            "mediumTerm": { "accuracy": "79.1", "mape": "12.1", "mae": "10.9", "rmse": "14.2", "dataPoints": 168 }
          }
        },
        {
          "date": "2025-02-07",
          "metrics": {
            "shortTerm": { "accuracy": "86.7", "mape": "8.5", "mae": "7.7", "rmse": "9.9", "dataPoints": 48 },
            "mediumTerm": { "accuracy": "77.9", "mape": "12.7", "mae": "11.5", "rmse": "14.8", "dataPoints": 168 }
          }
        },
        {
          "date": "2025-02-08",
          "metrics": {
            "shortTerm": { "accuracy": "87.9", "mape": "8.1", "mae": "7.4", "rmse": "9.6", "dataPoints": 48 },
            "mediumTerm": { "accuracy": "78.6", "mape": "12.4", "mae": "11.1", "rmse": "14.4", "dataPoints": 168 }
          }
        },
        {
          "date": "2025-02-09",
          "metrics": {
            "shortTerm": { "accuracy": "87.2", "mape": "8.3", "mae": "7.6", "rmse": "9.8", "dataPoints": 48 },
            "mediumTerm": { "accuracy": "78.1", "mape": "12.6", "mae": "11.3", "rmse": "14.6", "dataPoints": 168 }
          }
        },
        {
          "date": "2025-02-10",
          "metrics": {
            "shortTerm": { "accuracy": "87.5", "mape": "8.2", "mae": "7.5", "rmse": "9.8", "dataPoints": 48 },
            "mediumTerm": { "accuracy": "78.3", "mape": "12.5", "mae": "11.2", "rmse": "14.5", "dataPoints": 168 }
          }
        }
      ]
    }
  },
  "mibelEarlyWarnings": {
    "enabled": true,
    "thresholds": {
      "priceSpike": {
        "percentageIncrease": 15,
        "absoluteIncrease": 20,
        "timeWindow": "1 hour"
      },
      "volatility": {
        "highVolatility": 25,
        "extremeVolatility": 40
      },
      "trend": {
        "sustainedIncrease": 10,
        "sustainedDecrease": -10,
        "period": "24 hours"
      }
    },
    "activeWarnings": [
      {
        "id": 1,
        "type": "price_spike",
        "severity": "medium",
        "message": "Expected price increase of 18% in next 3 hours",
        "time": "2025-02-11T14:00:00Z",
        "recommendedAction": "Consider battery discharge or reduce consumption",
        "impact": {
          "estimatedCostIncrease": 45.20,
          "timeWindow": "3 hours"
        }
      },
      {
        "id": 2,
        "type": "volatility",
        "severity": "low",
        "message": "Increased price volatility detected for tomorrow",
        "time": "2025-02-12T00:00:00Z",
        "recommendedAction": "Monitor forecasts closely",
        "impact": {
          "volatilityRange": "±22%",
          "confidence": "medium"
        }
      }
    ],
    "history": [
      {
        "date": "2025-02-10",
        "warnings": 2,
        "accuracy": 87
      },
      {
        "date": "2025-02-09",
        "warnings": 1,
        "accuracy": 92
      }
    ]
  },
  "indexTariffs": {
    "active": [
      {
        "id": 1,
        "provider": "EDP Renewables",
        "type": "Index",
        "basePrice": 0.045,
        "mibelIndex": true,
        "mibelMultiplier": 1.0,
        "fixedMargin": 0.005,
        "currentEffectivePrice": 0.0945,
        "updateFrequency": "hourly",
        "lastUpdate": (new Date()).toISOString(),
        "consumptionBreakdown": {
          "baseLoad": 800,
          "variableLoad": 1060,
          "total": 1860
        }
      }
    ],
    "configuration": {
      "mibelDataSource": "OMIE API",
      "forecastIntegration": true,
      "earlyWarningEnabled": true,
      "updateFrequency": "hourly",
      "priceAdjustmentLag": "1 hour"
    }
  },
  "availableProviders": [
    {
      "id": 1,
      "name": "EDP Renewables",
      "logo": "☀️",
      "type": "Solar Energy",
      "country": "Portugal",
      "rate": 0.045,
      "renewablePercentage": 100,
      "reliability": 98.5,
      "contractTerm": "3 years",
      "monthlyCost": 38420,
      "annualSavings": 12500,
      "benefits": ["100% renewable", "Fixed pricing", "Premium support"],
      "isCurrent": true
    },
    {
      "id": 2,
      "name": "Iberdrola España",
      "logo": "⚡",
      "type": "Grid Supply",
      "country": "Spain",
      "rate": 0.089,
      "renewablePercentage": 35,
      "reliability": 99.8,
      "contractTerm": "2 years",
      "monthlyCost": 42150,
      "annualSavings": -5200,
      "benefits": ["High reliability", "24/7 support", "Market-indexed pricing"],
      "isCurrent": false
    },
    {
      "id": 3,
      "name": "Galp Energia",
      "logo": "🔋",
      "type": "Hybrid Supply",
      "country": "Portugal",
      "rate": 0.067,
      "renewablePercentage": 65,
      "reliability": 97.2,
      "contractTerm": "5 years",
      "monthlyCost": 35890,
      "annualSavings": 15600,
      "benefits": ["Long-term stability", "Mixed renewable/traditional", "Local support"],
      "isCurrent": false
    },
    {
      "id": 4,
      "name": "REN Energy Plus",
      "logo": "💨",
      "type": "Wind + Storage",
      "country": "Portugal",
      "rate": 0.052,
      "renewablePercentage": 88,
      "reliability": 96.8,
      "contractTerm": "4 years",
      "monthlyCost": 36750,
      "annualSavings": 13200,
      "benefits": ["High renewable mix", "Battery storage included", "Smart grid integration"],
      "isCurrent": false
    }
  ],
  // Enhanced Contract Management - Lock-in Tracking, Risk Profiles, Advanced Criteria
  "enhancedContractManagement": {
    "currentContracts": [
      {
        "id": 1,
        "provider": "EDP Renewables",
        "type": "Fixed",
        "startDate": "2023-01-15",
        "endDate": "2026-01-15",
        "lockInPeriod": {
          "enabled": true,
          "endDate": "2025-07-15",
          "daysRemaining": 178,
          "earlyTerminationFee": 15000,
          "warning": "Lock-in period ends in 178 days"
        },
        "riskProfile": {
          "financial": "low",
          "operational": "low",
          "regulatory": "low",
          "environmental": "very_low",
          "overall": "low"
        },
        "sustainabilityCertifications": ["ISO 14001", "RE100", "Carbon Neutral"],
        "vendorRiskProfile": {
          "creditRating": "AAA",
          "marketPosition": "strong",
          "reliability": 98.5,
          "riskScore": 15
        },
        "matchingCriteria": {
          "maxMW": 5,
          "renewablePercent": 100,
          "pricePerKWh": 0.045,
          "sustainabilityCertifications": true,
          "vendorRiskMax": 20
        }
      }
    ],
    "contractCriteria": {
      "maxMW": {
        "min": 1,
        "max": 10,
        "preferred": 7
      },
      "renewablePercent": {
        "min": 70,
        "max": 100,
        "preferred": 85
      },
      "pricePerKWh": {
        "max": 0.090,
        "preferred": 0.050
      },
      "reliability": {
        "min": 95,
        "preferred": 98
      },
      "sustainabilityCertifications": ["ISO 14001", "RE100", "Carbon Neutral", "B-Corp"],
      "vendorRiskMax": 25,
      "lockInPeriod": {
        "maxDays": 365,
        "preferredDays": 0
      }
    },
    "contractNegotiations": [
      {
        "id": 1,
        "provider": "AlphaEnergy",
        "status": "in_progress",
        "startDate": "2025-01-10",
        "lastUpdate": "2025-01-19",
        "proposals": [
          {
            "date": "2025-01-10",
            "type": "initial",
            "details": "Initial contract proposal received"
          },
          {
            "date": "2025-01-15",
            "type": "counter",
            "details": "Counter-proposal submitted with improved terms"
          }
        ]
      }
    ]
  },
  // ESG Compliance Reporting
  "esgCompliance": {
    "reportTemplates": [
      {
        "id": "esg-full",
        "name": "Full ESG Compliance Report",
        "type": "regulatory",
        "sections": [
          "executive_summary",
          "carbon_footprint",
          "energy_consumption",
          "renewable_energy_usage",
          "water_usage",
          "waste_management",
          "sustainability_initiatives",
          "compliance_checklist",
          "audit_trail"
        ],
        "suitableFor": ["regulatory_submission", "stakeholder_report", "audit"]
      },
      {
        "id": "esg-carbon",
        "name": "Carbon Emissions Report",
        "type": "focused",
        "sections": [
          "carbon_footprint",
          "emissions_by_source",
          "reduction_targets",
          "offset_programs",
          "verification"
        ],
        "suitableFor": ["carbon_registry", "compliance", "verification"]
      },
      {
        "id": "esg-energy",
        "name": "Energy Efficiency Report",
        "type": "focused",
        "sections": [
          "energy_consumption",
          "efficiency_metrics",
          "optimization_initiatives",
          "renewable_integration",
          "future_goals"
        ],
        "suitableFor": ["energy_audit", "efficiency_certification", "stakeholder_report"]
      }
    ],
    "complianceChecklist": {
      "regulatory": {
        "eu_taxonomy": true,
        "sfdr_disclosure": true,
        "carbon_reporting": true,
        "energy_efficiency_directive": true
      },
      "certifications": {
        "iso_14001": true,
        "iso_50001": true,
        "re100": false,
        "carbon_neutral": false
      },
      "data_verification": {
        "third_party_audit": false,
        "automated_validation": true,
        "historical_tracking": true
      }
    },
    "auditTrail": {
      "enabled": true,
      "retentionDays": 2555,
      "lastAudit": "2025-01-15",
      "nextAudit": "2025-04-15"
    }
  },
  // Legacy System Integration Management
  "integrationManagement": {
    "integrations": [
      {
        "id": "bms-01",
        "name": "Building Management System",
        "type": "bms",
        "status": "connected",
        "health": "healthy",
        "lastSync": "2025-01-19T10:09:00Z",
        "endpoint": "https://api.bms.example.com/v1",
        "apiKey": "***hidden***",
        "dataSources": ["temperature", "humidity", "power_consumption"],
        "syncInterval": 300,
        "config": {
          "retryOnFailure": true,
          "maxRetries": 3,
          "timeout": 5000
        }
      },
      {
        "id": "legacy-module-01",
        "name": "Legacy Module Connector",
        "type": "legacy",
        "status": "connected",
        "health": "warning",
        "lastSync": "2025-01-19T09:45:00Z",
        "endpoint": "http://legacy.local:8080/api",
        "dataSources": ["power_meters", "pdus"],
        "syncInterval": 600,
        "config": {
          "retryOnFailure": true,
          "maxRetries": 5,
          "timeout": 10000
        },
        "warnings": ["Using legacy protocol, consider migration"]
      },
      {
        "id": "smart-meter-01",
        "name": "Smart Meter API",
        "type": "meter",
        "status": "disconnected",
        "health": "unhealthy",
        "lastSync": "2025-01-18T14:20:00Z",
        "endpoint": "https://metering.utility.com/api",
        "apiKey": "***hidden***",
        "dataSources": ["consumption", "cost"],
        "syncInterval": 3600,
        "errors": ["Connection timeout", "API key expired"]
      }
    ],
    "connectionHealth": {
      "total": 3,
      "connected": 2,
      "disconnected": 1,
      "healthy": 1,
      "warning": 1,
      "unhealthy": 1
    }
  },
  // Deployment Configuration
  "deploymentConfiguration": {
    "mode": "self-hosted",
    "networkAccess": {
      "type": "isolated",
      "externalApiAccess": false,
      "dataFlow": "local_only"
    },
    "dataStorage": {
      "location": "local",
      "backupEnabled": true,
      "retentionDays": 365
    },
    "security": {
      "encryption": "enabled",
      "accessControl": "strict",
      "auditLogging": true
    },
    "availableModes": [
      {
        "id": "cloud",
        "name": "Cloud Deployment",
        "description": "Hosted in cloud with external API access"
      },
      {
        "id": "self-hosted",
        "name": "Self-Hosted",
        "description": "On-premise deployment with full control"
      },
      {
        "id": "isolated",
        "name": "Isolated Deployment",
        "description": "Air-gapped deployment with no external access"
      }
    ]
  },
  "weatherData": {
    "current": {
      "location": "Lisboa, Portugal",
      "temperature": 24,
      "condition": "Partly Cloudy",
      "humidity": 68,
      "windSpeed": 12,
      "solarIrradiance": 750,
      "icon": "⛅"
    },
    "forecast": [
      {
        "day": "Today",
        "condition": "Partly Cloudy",
        "tempHigh": 26,
        "tempLow": 18,
        "windSpeed": 12,
        "solarPotential": 85,
        "windPotential": 60,
        "icon": "⛅"
      },
      {
        "day": "Tomorrow",
        "condition": "Sunny",
        "tempHigh": 29,
        "tempLow": 20,
        "windSpeed": 8,
        "solarPotential": 95,
        "windPotential": 40,
        "icon": "☀️"
      },
      {
        "day": "Saturday",
        "condition": "Mostly Sunny",
        "tempHigh": 31,
        "tempLow": 22,
        "windSpeed": 15,
        "solarPotential": 92,
        "windPotential": 70,
        "icon": "🌤️"
      },
      {
        "day": "Sunday",
        "condition": "Windy",
        "tempHigh": 27,
        "tempLow": 19,
        "windSpeed": 22,
        "solarPotential": 75,
        "windPotential": 90,
        "icon": "💨"
      }
    ],
    "energyImpact": {
      "currentSolarOutput": 1240,
      "forecastSolarOutput": 1450,
      "currentWindOutput": 680,
      "forecastWindOutput": 920,
      "optimizationOpportunities": [
        "Tomorrow: Increase solar workloads (+15% efficiency)",
        "Saturday: Peak wind conditions for high-energy tasks",
        "Sunday: Optimal battery charging window (strong winds)"
      ]
    }
  },
  "userProfile": {
    "name": "Data Center Manager",
    "role": "Administrator",
    "preferences": {
      "language": "en",
      "theme": "light",
      "currency": "EUR"
    },
    "featureAccess": {
      "dashboard": {
        "enabled": true,
        "sections": {
          "kpiCards": true,
          "costBreakdown": true,
          "timeSelector": true
        }
      },
      "energySources": {
        "enabled": true,
        "sections": {
          "sourceCards": true,
          "optimization": true
        }
      },
      "contracts": {
        "enabled": true,
        "sections": {
          "activeContract": true,
          "switchProvider": true
        }
      },
      "sustainability": {
        "enabled": true,
        "sections": {
          "forecastChart": true,
          "weatherIntegration": true
        }
      },
      "workload": {
        "enabled": true,
        "sections": {
          "activeTasks": true,
          "aiRecommendations": true
        }
      },
      "reports": {
        "enabled": true,
        "sections": {
          "projectedSavings": true,
          "timeRangeSelector": true
        }
      },
      "userProfile": {
        "enabled": true,
        "sections": {
          "featureControls": true,
          "goalsSettings": true
        }
      }
    },
    // CHANGE 3: Goals data with status information
    "goals": {
      "carbonReduction": {
        "enabled": true,
        "target": 10,
        "unit": "percent_per_year",
        "currentProgress": 12.8,
        "description": "Reduce carbon emissions by 10% per year",
        "status": "achieved"
      },
      "costReduction": {
        "enabled": true,
        "target": 5,
        "unit": "percent_per_year",
        "currentProgress": 7.2,
        "description": "Reduce energy costs by 5% per year",
        "status": "achieved"
      },
      "renewableEnergy": {
        "enabled": true,
        "target": 80,
        "unit": "percentage",
        "currentProgress": 65,
        "description": "Achieve 80% renewable energy usage",
        "status": "in_progress"
      },
      "efficiency": {
        "enabled": false,
        "target": 15,
        "unit": "percent_improvement",
        "currentProgress": 8.3,
        "description": "Improve overall energy efficiency by 15%",
        "status": "cancelled"
      }
    }
  },
  "workload": {
    "activeTasks": [
      {
        "id": 1,
        "name": "Data Backup Process",
        "description": "Critical nightly backup of customer data",
        "priority": "High",
        "status": "Running",
        "cpuUsage": 45.2,
        "memoryUsage": 68.7,
        "energyConsumption": 156.8,
        "costPerHour": 14.92,
        "runtime": "2h 15m",
        "icon": "💾"
      },
      {
        "id": 2,
        "name": "ML Model Training",
        "description": "Training neural network for predictive analytics",
        "priority": "Medium",
        "status": "Running",
        "cpuUsage": 78.3,
        "memoryUsage": 89.1,
        "energyConsumption": 289.4,
        "costPerHour": 27.49,
        "runtime": "5h 42m",
        "icon": "🤖"
      },
      {
        "id": 3,
        "name": "Database Maintenance",
        "description": "Weekly database optimization and cleanup",
        "priority": "Low",
        "status": "Queued",
        "cpuUsage": 0,
        "memoryUsage": 0,
        "energyConsumption": 0,
        "costPerHour": 12.35,
        "runtime": "0m",
        "icon": "🗄️"
      }
    ],
    // CHANGE 2: AI Recommendations data for individual boxes
    "aiRecommendations": [
      {
        "id": 1,
        "type": "scheduling",
        "title": "Peak Solar Scheduling",
        "description": "Move ML training to 12:00-15:00 when solar production peaks in Iberian Peninsula",
        "potentialSavings": 106.15,
        "carbonReduction": 89.2,
        "userIncentive": "Reduced compute costs during high renewable generation",
        "currency": "EUR",
        "priority": "High",
        "implementationTime": "10 minutes",
        "difficulty": "Easy",
        "icon": "📊",
        "status": "Recommended"
      },
      {
        "id": 2,
        "type": "efficiency",
        "title": "Off-Peak Processing",
        "description": "Schedule non-critical tasks during 02:00-06:00 off-peak hours",
        "potentialSavings": 66.21,
        "carbonReduction": 52.1,
        "userIncentive": "40% lower energy rates during off-peak hours",
        "currency": "EUR",
        "priority": "Medium",
        "implementationTime": "5 minutes",
        "difficulty": "Easy",
        "icon": "⚡",
        "status": "Recommended"
      },
      {
        "id": 3,
        "type": "optimization",
        "title": "Database Consolidation",
        "description": "Combine multiple database maintenance tasks to reduce overhead",
        "potentialSavings": 34.58,
        "carbonReduction": 28.7,
        "userIncentive": "Reduced system load and faster completion times",
        "currency": "EUR",
        "priority": "Medium",
        "implementationTime": "30 minutes",
        "difficulty": "Moderate",
        "icon": "🔧",
        "status": "Recommended"
      },
      {
        "id": 4,
        "type": "storage",
        "title": "Battery Peak Shaving",
        "description": "Use battery storage during peak demand hours to reduce grid costs",
        "potentialSavings": 89.45,
        "carbonReduction": 76.3,
        "userIncentive": "Avoid expensive peak-hour electricity rates",
        "currency": "EUR",
        "priority": "High",
        "implementationTime": "10 minutes",
        "difficulty": "Easy",
        "icon": "🔋",
        "status": "Recommended"
      }
    ]
  },
  // ERSE Data Integration
  "erseData": {
    "lastUpdate": "2025-01-19T10:00:00Z",
    "marketPrices": {
      "portugal": {
        "current": 0.089,
        "avgDaily": 0.087,
        "avgMonthly": 0.085,
        "trend": "+2.3%"
      },
      "spain": {
        "current": 0.092,
        "avgDaily": 0.090,
        "avgMonthly": 0.088,
        "trend": "+1.8%"
      }
    },
    "renewableMix": {
      "portugal": 65.3,
      "spain": 48.7,
      "iberia": 57.0
    },
    "marketRegulations": {
      "mibelLimitations": "MIBEL market supports Portugal and Spain integration with shared price mechanisms",
      "volatilityWarning": "Market prices subject to daily/hourly variations",
      "complianceNote": "All providers must comply with ERSE regulations"
    },
    "personalizedAnalysis": {
      "recommendedActions": [
        "Switch to hybrid tariff during peak hours",
        "Consider AlphaEnergy for data center scale operations",
        "Leverage battery storage during ERSE price dips"
      ],
      "savingsOpportunity": 1250,
      "carbonReductionPotential": 890
    }
  },
  // Temperature Monitoring Data
  // Complete Sensor Integration - Temperature, Humidity, and Leak Detection
  "sensorMonitoring": {
    "temperatureSensors": [
      {
        "id": "temp-01",
        "location": "Server Room A",
        "currentTemp": 22.5,
        "optimalRange": [18, 24],
        "status": "optimal",
        "lastUpdate": "2025-01-19T10:09:00Z"
      },
      {
        "id": "temp-02",
        "location": "Server Room B",
        "currentTemp": 26.3,
        "optimalRange": [18, 24],
        "status": "warning",
        "lastUpdate": "2025-01-19T10:09:00Z"
      },
      {
        "id": "temp-03",
        "location": "HVAC Zone 1",
        "currentTemp": 19.8,
        "optimalRange": [18, 24],
        "status": "optimal",
        "lastUpdate": "2025-01-19T10:09:00Z"
      },
      {
        "id": "temp-04",
        "location": "HVAC Zone 2",
        "currentTemp": 27.1,
        "optimalRange": [18, 24],
        "status": "critical",
        "lastUpdate": "2025-01-19T10:09:00Z"
      }
    ],
    "humiditySensors": [
      {
        "id": "humidity-01",
        "location": "Server Room A",
        "currentHumidity": 45.2,
        "optimalRange": [40, 60],
        "status": "optimal",
        "lastUpdate": "2025-01-19T10:09:00Z"
      },
      {
        "id": "humidity-02",
        "location": "Server Room B",
        "currentHumidity": 38.5,
        "optimalRange": [40, 60],
        "status": "warning",
        "lastUpdate": "2025-01-19T10:09:00Z"
      },
      {
        "id": "humidity-03",
        "location": "HVAC Zone 1",
        "currentHumidity": 52.8,
        "optimalRange": [40, 60],
        "status": "optimal",
        "lastUpdate": "2025-01-19T10:09:00Z"
      },
      {
        "id": "humidity-04",
        "location": "HVAC Zone 2",
        "currentHumidity": 65.3,
        "optimalRange": [40, 60],
        "status": "critical",
        "lastUpdate": "2025-01-19T10:09:00Z"
      }
    ],
    "leakDetectionSensors": [
      {
        "id": "leak-01",
        "location": "Server Room A - Under Floor",
        "status": "normal",
        "lastDetection": null,
        "lastUpdate": "2025-01-19T10:09:00Z"
      },
      {
        "id": "leak-02",
        "location": "Server Room B - Near Cooling Unit",
        "status": "alert",
        "lastDetection": "2025-01-19T09:15:00Z",
        "lastUpdate": "2025-01-19T10:09:00Z",
        "alert": "Moisture detected - Low level alert"
      },
      {
        "id": "leak-03",
        "location": "HVAC Zone 1 - Drainage Area",
        "status": "normal",
        "lastDetection": null,
        "lastUpdate": "2025-01-19T10:09:00Z"
      },
      {
        "id": "leak-04",
        "location": "HVAC Zone 2 - Pipe Junction",
        "status": "critical",
        "lastDetection": "2025-01-19T10:05:00Z",
        "lastUpdate": "2025-01-19T10:09:00Z",
        "alert": "Water detected - Immediate attention required"
      }
    ],
    "coolingSystemRecommendations": [
      {
        "id": 1,
        "type": "system_switch",
        "title": "Switch HVAC Zone 2 to More Efficient System",
        "description": "Current temperature exceeds optimal range. Recommend switching to liquid cooling system for Zone 2.",
        "currentSystem": "Air Cooling",
        "recommendedSystem": "Liquid Cooling",
        "energySavings": 450,
        "costSavings": 89.50,
        "implementationTime": "4-6 hours",
        "priority": "high",
        "status": "recommended"
      },
      {
        "id": 2,
        "type": "maintenance",
        "title": "HVAC Maintenance Required",
        "description": "Server Room B temperature rising. Schedule preventive maintenance for cooling system.",
        "currentSystem": "Air Cooling",
        "recommendedSystem": "Air Cooling (Maintained)",
        "energySavings": 230,
        "costSavings": 45.80,
        "implementationTime": "2 hours",
        "priority": "medium",
        "status": "recommended"
      }
    ],
    "historicalData": {
      "temperature": {
        "24hours": [
          { "time": "00:00", "avgTemp": 21.2, "energyConsumption": 1450 },
          { "time": "06:00", "avgTemp": 20.8, "energyConsumption": 1380 },
          { "time": "12:00", "avgTemp": 23.5, "energyConsumption": 1650 },
          { "time": "18:00", "avgTemp": 25.1, "energyConsumption": 1820 },
          { "time": "24:00", "avgTemp": 22.3, "energyConsumption": 1520 }
        ],
        "7days": [
          { "day": "Mon", "avgTemp": 22.1, "energyConsumption": 15800 },
          { "day": "Tue", "avgTemp": 23.4, "energyConsumption": 17200 },
          { "day": "Wed", "avgTemp": 24.2, "energyConsumption": 18100 },
          { "day": "Thu", "avgTemp": 23.8, "energyConsumption": 17500 },
          { "day": "Fri", "avgTemp": 22.9, "energyConsumption": 16800 },
          { "day": "Sat", "avgTemp": 21.5, "energyConsumption": 15200 },
          { "day": "Sun", "avgTemp": 21.0, "energyConsumption": 14800 }
        ]
      },
      "humidity": {
        "24hours": [
          { "time": "00:00", "avgHumidity": 48.2 },
          { "time": "06:00", "avgHumidity": 45.8 },
          { "time": "12:00", "avgHumidity": 52.5 },
          { "time": "18:00", "avgHumidity": 58.1 },
          { "time": "24:00", "avgHumidity": 50.3 }
        ],
        "7days": [
          { "day": "Mon", "avgHumidity": 49.1 },
          { "day": "Tue", "avgHumidity": 51.4 },
          { "day": "Wed", "avgHumidity": 53.2 },
          { "day": "Thu", "avgHumidity": 52.8 },
          { "day": "Fri", "avgHumidity": 50.9 },
          { "day": "Sat", "avgHumidity": 48.5 },
          { "day": "Sun", "avgHumidity": 47.0 }
        ]
      }
    }
  },
  // Enhanced Battery & Storage Management
  "batteryManagement": {
    "batterySystems": [
      {
        "id": "battery-01",
        "name": "Main Storage Bank",
        "capacity": 500,
        "currentCharge": 385,
        "chargeLevel": 77,
        "status": "charging",
        "optimizationMode": "peak_shaving",
        "lastUpdate": "2025-01-19T10:09:00Z"
      },
      {
        "id": "battery-02",
        "name": "Backup Storage",
        "capacity": 300,
        "currentCharge": 240,
        "chargeLevel": 80,
        "status": "standby",
        "optimizationMode": "grid_support",
        "lastUpdate": "2025-01-19T10:09:00Z"
      }
    ],
    "consumptionBreakdown": {
      "fixedConsumption": {
        "baseLoad": 1200,
        "cooling": 450,
        "infrastructure": 320,
        "total": 1970,
        "percentage": 69.2
      },
      "indexConsumption": {
        "workloads": 650,
        "peakDemand": 230,
        "variableCooling": 180,
        "total": 1060,
        "percentage": 30.8
      }
    },
    "optimizationRecommendations": [
      {
        "id": 1,
        "type": "battery_deployment",
        "title": "Deploy Battery During Peak Hours",
        "description": "Use battery storage during 18:00-22:00 peak hours to reduce grid dependency by 40%",
        "potentialSavings": 125.50,
        "carbonReduction": 89.2,
        "implementationTime": "5 minutes",
        "priority": "high"
      },
      {
        "id": 2,
        "type": "pv_integration",
        "title": "Integrate Additional PV Panels",
        "description": "Install 200kW additional PV panels to increase renewable self-sufficiency by 15%",
        "investment": 180000,
        "roi": "12.5%",
        "paybackPeriod": "6.8 years",
        "potentialSavings": 22500,
        "carbonReduction": 15600,
        "priority": "medium"
      }
    ],
    "solarPanelRecommendations": {
      "currentInstallation": {
        "capacity": 1200,
        "efficiency": 85,
        "annualProduction": 1450000
      },
      "recommendedExpansion": {
        "additionalCapacity": 500,
        "estimatedCost": 425000,
        "estimatedROI": "14.2%",
        "paybackPeriod": "5.2 years",
        "additionalAnnualProduction": 620000,
        "annualSavings": 62000,
        "carbonReduction": 43500
      }
    }
  },
  // Enhanced CO2 Emissions Data
  "co2Emissions": {
    "detailedBreakdown": {
      "bySource": {
        "solar": { "emissions": 0, "percentage": 0 },
        "wind": { "emissions": 0, "percentage": 0 },
        "grid": { "emissions": 1895.2, "percentage": 100 },
        "battery": { "emissions": 45.8, "percentage": 2.4 }
      },
      "byZone": {
        "serverRoomA": { "emissions": 485.2, "percentage": 25.6 },
        "serverRoomB": { "emissions": 620.8, "percentage": 32.8 },
        "hvacZone1": { "emissions": 320.5, "percentage": 16.9 },
        "hvacZone2": { "emissions": 468.7, "percentage": 24.7 }
      },
      "byTimeOfDay": {
        "peak": { "emissions": 850, "percentage": 44.8 },
        "offPeak": { "emissions": 1045.2, "percentage": 55.2 }
      }
    },
    "reductionTargets": {
      "current": 1895.2,
      "target2025": 1650,
      "target2026": 1420,
      "progress2025": 87.1
    },
    "multiLevelOffers": [
      {
        "level": 1,
        "name": "Basic Carbon Offset",
        "reduction": 100,
        "cost": 25,
        "description": "Offset 100kg CO₂ through renewable certificates"
      },
      {
        "level": 2,
        "name": "Standard Carbon Offset",
        "reduction": 500,
        "cost": 115,
        "description": "Offset 500kg CO₂ with verified renewable projects"
      },
      {
        "level": 3,
        "name": "Premium Carbon Offset",
        "reduction": 1000,
        "cost": 220,
        "description": "Offset 1000kg CO₂ with direct renewable energy purchase"
      },
      {
        "level": 4,
        "name": "Complete Carbon Neutral",
        "reduction": 1895.2,
        "cost": 415,
        "description": "Full carbon neutrality with premium renewable integration"
      }
    ]
  },
  // Consumption Thresholds
  "consumptionThresholds": {
    "currentSettings": {
      "minConsumption": 2000,
      "maxConsumption": 4000,
      "alertThreshold": 3500,
      "criticalThreshold": 3800
    },
    "matchingCriteria": {
      "minMW": 1,
      "maxMW": 10,
      "preferredRenewable": 70,
      "maxPricePerKWh": 0.090,
      "requiredReliability": 95
    }
  },
  // Custom Graphs Configuration
  "customGraphs": {
    "availableTypes": ["line", "bar", "pie", "area", "scatter"],
    "savedGraphs": [
      {
        "id": "custom-01",
        "name": "Energy vs Temperature Correlation",
        "type": "scatter",
        "dataSource": "sensorMonitoring.historicalData.temperature",
        "xAxis": "temperature",
        "yAxis": "energyConsumption"
      }
    ]
  },
  "sustainabilityForecast": {
    "1day": {
      "consumption": [2847, 2756, 2834, 2923, 2678, 2534, 2612, 2789, 2856, 2734, 2645, 2567, 2698, 2723, 2845, 2912, 2756, 2689, 2734, 2812, 2856, 2789, 2712, 2645],
      "emissions": [1895, 1834, 1889, 1948, 1784, 1689, 1741, 1856, 1902, 1823, 1763, 1712, 1798, 1815, 1897, 1941, 1834, 1793, 1823, 1874, 1902, 1856, 1808, 1763],
      "labels": ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
    },
    "6months": {
      "consumption": [2050200, 2156300, 2234100, 2089600, 1987400, 2112800],
      "emissions": [1365834, 1437640, 1489226, 1393764, 1324956, 1409372],
      "labels": ["Oct 2025", "Nov 2025", "Dec 2025", "Jan 2026", "Feb 2026", "Mar 2026"]
    },
    "1year": {
      "consumption": [2050200, 2156300, 2234100, 2089600, 1987400, 2112800, 2289400, 2156700, 2034500, 2178900, 2256300, 2145600],
      "emissions": [1365834, 1437640, 1489226, 1393764, 1324956, 1409372, 1526276, 1437628, 1356990, 1453634, 1504206, 1431204],
      "labels": ["Oct 2025", "Nov 2025", "Dec 2025", "Jan 2026", "Feb 2026", "Mar 2026", "Apr 2026", "May 2026", "Jun 2026", "Jul 2026", "Aug 2026", "Sep 2026"]
    },
    "5years": {
      "consumption": [24602400, 23789600, 22945800, 22134600, 21456300],
      "emissions": [16400160, 15858624, 15300372, 14756076, 14304204],
      "labels": ["2025", "2026", "2027", "2028", "2029"]
    }
  },
  "translations": {
    "en": {
      "dashboard": "Dashboard",
      "energySources": "Energy Sources",
      "contracts": "Energy Provider Contracts",
      "sustainability": "Sustainability",
      "workload": "Workload Management",
      "reports": "Reports",
      "userProfile": "User Profile",
      "switchProvider": "Switch Provider",
      "weatherIntegration": "Weather Integration",
      "savingsProjection": "Savings Projection",
      "featureControls": "Feature Controls",
      "goalsSettings": "Goals & Settings",
      "totalConsumption": "Total Consumption",
      "energyCost": "Energy Cost",
      "carbonEmissions": "Carbon Emissions",
      "currentProduction": "Current Production",
      "costPerKwh": "Cost per kWh",
      "activeContract": "Active Contract",
      "availableContracts": "Available Contracts",
      "activeTasks": "Active Tasks",
      "aiRecommendations": "AI Recommendations",
      "hourlyView": "Hourly",
      "dailyView": "Daily",
      "monthlyView": "Monthly",
      "yearlyView": "Yearly",
      "refreshData": "Refresh Data",
      "exportReport": "Generate Report",
      "1day": "1 Day",
      "6months": "6 Months",
      "1year": "1 Year",
      "5years": "5 Years"
    },
    "pt": {
      "dashboard": "Painel",
      "energySources": "Fontes de Energia",
      "contracts": "Contratos de Fornecedores",
      "sustainability": "Sustentabilidade",
      "workload": "Gestão de Carga",
      "reports": "Relatórios",
      "userProfile": "Perfil do Usuário",
      "switchProvider": "Mudar Fornecedor",
      "weatherIntegration": "Integração Meteorológica",
      "savingsProjection": "Projeção de Poupanças",
      "featureControls": "Controles de Recursos",
      "goalsSettings": "Metas e Configurações"
    }
  }
};

// Global variables
let currentLanguage = 'en';
let currentTimeView = 'hourly';
let currentForecastPeriod = '6months';
let currentTimeRange = '1month';
let charts = {};
let selectedProviderId = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  console.log('Wattra advanced platform initializing...');
  
  setTimeout(() => {
    try {
      initializeEventListeners();
      renderInitialData();
      renderCharts();
      renderEfficiencyMetricsChart();
      renderContracts();
      renderSustainability();
      renderWorkload();
      renderReports();
      renderTemperatureMonitoring();
      renderBatteryAndPV();
      renderERSEPrices();
      renderPersonalizedAnalysis();
      renderUserProfile();
      renderCustomGraphs();
      renderThresholdsConfig();
      
      // New feature rendering
      renderDataCenterContext();
      renderGranularMonitoring();
      renderIntegrationManagement();
      renderESGCompliance();
      renderForecastReliability();
      renderEnhancedContractManagement();
      renderDeploymentConfiguration();
      initSensorTabs();
      
      translatePage();
      setupNotifications();
      
      // Start auto-refresh timer
      setInterval(autoRefreshData, 5 * 60 * 1000);
      
      console.log('Wattra advanced platform ready');
      showToast('Welcome to Wattra AI DataCenter Platform');
    } catch (error) {
      console.error('Error during initialization:', error);
    }
  }, 300);
});

// Enhanced Event Listeners
function initializeEventListeners() {
  console.log('Setting up enhanced event listeners...');
  
  try {
    // Left sidebar navigation
    const sidebarNavItems = document.querySelectorAll('.sidebar-nav-item');
    console.log('Found sidebar nav items:', sidebarNavItems.length);
    
    sidebarNavItems.forEach((item, index) => {
      const tabId = item.dataset.tab;
      console.log(`Setting up sidebar nav item ${index}: ${tabId}`);
      
      item.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Sidebar item clicked:', tabId);
        switchTab(tabId);
      });
    });

    // Language switching
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        switchLanguage(this.dataset.lang);
      });
    });

    // Time view switching
    const timeButtons = document.querySelectorAll('.time-btn');
    timeButtons.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        switchTimeView(this.dataset.time);
      });
    });

    // Sustainability forecast time range
    const forecastButtons = document.querySelectorAll('.forecast-time-btn');
    forecastButtons.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        switchForecastPeriod(this.dataset.period);
      });
    });

    // Reports time range selector
    const timeRangeButtons = document.querySelectorAll('.time-range-btn');
    timeRangeButtons.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        switchTimeRange(this.dataset.range);
      });
    });

    // Interactive buttons
    setupInteractiveButtons();

    // Notification management
    setupNotifications();

    // Utility buttons
    setupUtilityButtons();

    // Modal close buttons
    document.querySelectorAll('.close-modal').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        closeModal(this.dataset.target);
      });
    });

    // User profile buttons
    setupUserProfileButtons();

    // Contract filters
    const maxMWFilter = document.getElementById('maxMWFilter');
    const tariffTypeFilter = document.getElementById('tariffTypeFilter');
    const renewableFilter = document.getElementById('renewableFilter');
    
    if (maxMWFilter) {
      maxMWFilter.addEventListener('change', renderContracts);
    }
    if (tariffTypeFilter) {
      tariffTypeFilter.addEventListener('change', renderContracts);
    }
    if (renewableFilter) {
      renewableFilter.addEventListener('input', renderContracts);
    }

    // Temperature refresh
    const refreshTemperature = document.getElementById('refreshTemperature');
    if (refreshTemperature) {
      refreshTemperature.addEventListener('click', renderTemperatureMonitoring);
    }

    // Thresholds save buttons
    const saveThresholds = document.getElementById('saveThresholds');
    const resetThresholds = document.getElementById('resetThresholds');
    if (saveThresholds) {
      saveThresholds.addEventListener('click', saveThresholdsConfig);
    }
    if (resetThresholds) {
      resetThresholds.addEventListener('click', resetThresholdsConfig);
    }

    console.log('Event listeners setup complete');
  } catch (error) {
    console.error('Error setting up event listeners:', error);
  }
}

function setupInteractiveButtons() {
  // Switch Provider button
  const switchProviderBtn = document.getElementById('switchProvider');
  if (switchProviderBtn) {
    console.log('Setting up switch provider button');
    switchProviderBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Switch provider button clicked');
      showSwitchProviderModal();
    });
  }
  
  // Weather Integration button
  const weatherBtn = document.getElementById('weatherIntegration');
  if (weatherBtn) {
    console.log('Setting up weather integration button');
    weatherBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Weather integration button clicked');
      showWeatherModal();
    });
  }
}

function setupNotifications() {
  const notificationBell = document.getElementById('notificationBell');
  const closeNotifications = document.getElementById('closeNotifications');
  
  if (notificationBell) {
    notificationBell.addEventListener('click', function(e) {
      e.preventDefault();
      toggleNotificationPanel();
    });
  }
  
  if (closeNotifications) {
    closeNotifications.addEventListener('click', function(e) {
      e.preventDefault();
      toggleNotificationPanel();
    });
  }
}

function setupUtilityButtons() {
  const refreshDataBtn = document.getElementById('refreshData');
  const generateReportBtn = document.getElementById('generateReport');
  
  if (refreshDataBtn) {
    refreshDataBtn.addEventListener('click', function(e) {
      e.preventDefault();
      refreshData();
    });
  }

  if (generateReportBtn) {
    generateReportBtn.addEventListener('click', function(e) {
      e.preventDefault();
      generateReport();
    });
  }
}

function setupUserProfileButtons() {
  const saveGoalsBtn = document.getElementById('saveGoals');
  const resetGoalsBtn = document.getElementById('resetGoals');
  
  if (saveGoalsBtn) {
    saveGoalsBtn.addEventListener('click', function(e) {
      e.preventDefault();
      saveGoals();
    });
  }

  if (resetGoalsBtn) {
    resetGoalsBtn.addEventListener('click', function(e) {
      e.preventDefault();
      resetGoals();
    });
  }
}

// FIXED: Tab navigation function
function switchTab(tabId) {
  console.log('========================================');
  console.log('SWITCHTAB CALLED - Tab ID:', tabId);
  console.log('========================================');
  
  try {
    console.log('[1] Starting try block');
    
    // Clear all active states first
    console.log('[2] About to query .nav-tab elements');
    const navTabs = document.querySelectorAll('.nav-tab');
    console.log('[3] Found nav tabs:', navTabs.length);
    
    navTabs.forEach(tab => {
      tab.classList.remove('active');
    });
    console.log('[4] Cleared all nav tab active states');
    
    // Set active tab
    const activeTab = document.querySelector(`[data-tab="${tabId}"]`);
    if (activeTab) {
      activeTab.classList.add('active');
      console.log('Activated tab button:', tabId);
    } else {
      console.warn('Could not find tab button with data-tab:', tabId);
    }
    
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content');
    console.log('Found tab content elements:', tabContents.length);
    tabContents.forEach(content => {
      content.classList.remove('active');
    });
    
    // Show target tab content
    const targetTab = document.getElementById(`${tabId}-tab`);
    console.log('Looking for tab content:', `${tabId}-tab`, 'Found:', !!targetTab);
    
    if (targetTab) {
      targetTab.classList.add('active');
      console.log('Showing tab content:', `${tabId}-tab`);
      console.log('About to schedule setTimeout for rendering...');
      
      // Render specific content based on tab - FIXED
      setTimeout(() => {
        console.log('setTimeout executed for tab:', tabId);
        try {
          if (tabId === 'workload') {
            renderWorkload();
          } else if (tabId === 'user-profile') {
            renderUserProfile();
            renderDeploymentConfiguration();
          } else if (tabId === 'reports') {
            updateSavingsProjection();
            renderForecastReliability();
            renderESGCompliance();
          } else if (tabId === 'granular-monitoring') {
            renderGranularMonitoring();
          } else if (tabId === 'integrations') {
            renderIntegrationManagement();
          } else if (tabId === 'temperature') {
            renderTemperatureMonitoring();
            initSensorTabs();
          } else if (tabId === 'contracts') {
            console.log('[CONTRACTS TAB] Rendering contracts tab content...');
            renderContracts();
            renderEnhancedContractManagement();
            console.log('[CONTRACTS TAB] Now rendering MIBEL sections...');
            // Render immediately with existing data
            renderMIBELPrices();
            renderMIBELForecast();
            renderMIBELEarlyWarnings();
            renderIndexTariffs();
            renderForecastAccuracy();
            console.log('[CONTRACTS TAB] Initial MIBEL rendering complete');
            // Then update MIBEL prices in background and re-render
            updateMIBELPrices().then(() => {
              renderMIBELPrices();
              renderMIBELForecast();
              renderMIBELEarlyWarnings();
              renderIndexTariffs();
              renderForecastAccuracy();
            }).catch((err) => {
              console.warn('MIBEL prices update failed:', err);
              // Data already rendered, so this is fine
            });
          } else if (tabId === 'sustainability') {
            renderSustainability();
            setTimeout(() => {
              updateSustainabilityForecastChart();  
            }, 100);
          }
          
          // Re-render charts for proper sizing
          Object.values(charts).forEach(chart => {
            if (chart && typeof chart.resize === 'function') {
              try {
                chart.resize();
              } catch (e) {
                console.warn('Chart resize error:', e);
              }
            }
          });
        } catch (error) {
          console.error('❌ Error rendering tab content:', error);
          console.error('Error stack:', error.stack);
          console.error('Tab ID:', tabId);
        }
      }, 150);
      
      showToast(`Navigated to ${tabId.replace('-', ' ')}`);
    } else {
      console.error('❌ Target tab content not found:', `${tabId}-tab`);
      console.log('Available tab IDs:', Array.from(document.querySelectorAll('[id$="-tab"]')).map(el => el.id));
    }
  } catch (error) {
    console.error('❌ Error switching tabs:', error);
    console.error('Error stack:', error.stack);
  }
}

// Language switching
function switchLanguage(lang) {
  console.log('Switching language to:', lang);
  currentLanguage = lang;
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    }
  });
  
  translatePage();
  showToast(`Language switched to ${lang === 'en' ? 'English' : 'Português'}`);
}

function translatePage() {
  const translations = appData.translations[currentLanguage] || appData.translations.en;
  
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (translations[key]) {
      // Check if element is a button with text inside
      if (element.tagName === 'BUTTON' || element.classList.contains('sidebar-nav-item')) {
        const textSpan = element.querySelector('.nav-text, span:not(.flag):not(.bell-icon):not(.nav-icon)');
        if (textSpan) {
          textSpan.textContent = translations[key];
        } else {
          element.textContent = translations[key];
        }
      } else {
        element.textContent = translations[key];
      }
    }
  });
  
  // Also update HTML lang attribute
  document.documentElement.lang = currentLanguage;
}

// Time view switching with proper visual feedback
function switchTimeView(timeView) {
  console.log('Switching time view to:', timeView);
  currentTimeView = timeView;
  
  try {
    document.querySelectorAll('.time-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.time === timeView) {
        btn.classList.add('active');
        btn.style.transform = 'scale(1.05)';
        setTimeout(() => {
          btn.style.transform = '';
        }, 150);
      }
    });
    
    showLoading();
    
    setTimeout(() => {
      try {
        updateKPICards();
        updateCharts();
        renderEfficiencyMetricsChart();
        renderEnergyMixChart();
        hideLoading();
        showToast(`Data updated for ${timeView} view`);
      } catch (error) {
        console.error('Error updating data for time view:', error);
        hideLoading();
        showToast('Error updating data');
      }
    }, 800);
  } catch (error) {
    console.error('Error switching time view:', error);
    hideLoading();
  }
}

// Forecast period switching
function switchForecastPeriod(period) {
  console.log('Switching forecast period to:', period);
  currentForecastPeriod = period;
  
  try {
    document.querySelectorAll('.forecast-time-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.period === period) {
        btn.classList.add('active');
      }
    });
    
    showLoading();
    
    setTimeout(() => {
      try {
        updateSustainabilityForecastChart();
        hideLoading();
        showToast(`Forecast updated for ${period} period`);
      } catch (error) {
        console.error('Error updating forecast chart:', error);
        hideLoading();
        showToast('Error updating forecast');
      }
    }, 600);
  } catch (error) {
    console.error('Error switching forecast period:', error);
    hideLoading();
  }
}

// Time range switching for reports with proper animation
function switchTimeRange(timeRange) {
  console.log('Switching time range to:', timeRange);
  currentTimeRange = timeRange;
  
  try {
    document.querySelectorAll('.time-range-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.range === timeRange) {
        btn.classList.add('active');
        btn.style.transform = 'scale(1.05)';
        setTimeout(() => {
          btn.style.transform = '';
        }, 200);
      }
    });
    
    showLoading();
    
    setTimeout(() => {
      try {
        updateSavingsProjection();
        hideLoading();
        showToast(`Savings projection updated for ${timeRange.replace(/(\d+)/, '$1 ')}`);
      } catch (error) {
        console.error('Error updating savings projection:', error);
        hideLoading();
        showToast('Error updating projection');
      }
    }, 600);
  } catch (error) {
    console.error('Error switching time range:', error);
    hideLoading();
  }
}

// Update KPI cards
function updateKPICards() {
  const data = appData.timeBasedData[currentTimeView];
  
  console.log(`Updating KPI cards for ${currentTimeView}:`, data);
  
  try {
    // Calculate accumulated production based on current time view
    let productionAccumulated = data.production;
    let productionUnit = ' kWh';
    if (currentTimeView === 'hourly') {
      productionAccumulated = data.production; // kWh for hourly
    } else if (currentTimeView === 'daily') {
      productionAccumulated = data.production * 24; // Convert to daily kWh
    } else if (currentTimeView === 'monthly') {
      productionAccumulated = data.production * 24 * 30; // Approximate monthly kWh
      if (productionAccumulated >= 1000) {
        productionAccumulated = (productionAccumulated / 1000).toFixed(2);
        productionUnit = ' MWh';
      }
    } else if (currentTimeView === 'yearly') {
      productionAccumulated = data.production * 24 * 365; // Approximate yearly kWh
      if (productionAccumulated >= 1000) {
        productionAccumulated = (productionAccumulated / 1000).toFixed(2);
        productionUnit = ' MWh';
      }
    }
    
    animateValue('totalConsumption', data.consumption, '', true, ' kWh');
    animateValue('energyCost', data.cost, '€', true);
    animateValue('carbonEmissions', data.emissions, '', true, ' kg CO₂');
    animateValue('currentProduction', productionAccumulated, '', true, productionUnit);
    
    const pueElement = document.getElementById('pueValue');
    const efficiencyElement = document.getElementById('efficiencyScore');
    
    if (pueElement) pueElement.textContent = data.pue.toString();
    if (efficiencyElement) efficiencyElement.textContent = `${data.efficiency}%`;
    
    updateTrendIndicators();
    
    console.log('KPI cards updated successfully');
  } catch (error) {
    console.error('Error updating KPI cards:', error);
  }
}

// Animate number changes
function animateValue(elementId, targetValue, prefix = '', useCommas = false, suffix = '') {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  try {
    const currentValue = parseFloat(element.textContent.replace(/[^\d.-]/g, '')) || 0;
    const increment = (targetValue - currentValue) / 30;
    let current = currentValue;
    
    const animation = setInterval(() => {
      current += increment;
      if ((increment > 0 && current >= targetValue) || (increment < 0 && current <= targetValue)) {
        current = targetValue;
        clearInterval(animation);
      }
      
      const displayValue = useCommas ? 
        Math.round(current).toLocaleString() : 
        current.toFixed(current < 10 ? 1 : 0);
      
      element.textContent = `${prefix}${displayValue}${suffix}`;
    }, 20);
  } catch (error) {
    console.error(`Error animating value for ${elementId}:`, error);
  }
}

// Update trend indicators
function updateTrendIndicators() {
  try {
    const data = appData.timeBasedData[currentTimeView];
    const trends = data.trend;
    
    const trendElements = {
      consumptionTrend: document.getElementById('consumptionTrend'),
      costTrend: document.getElementById('costTrend'),
      emissionsTrend: document.getElementById('emissionsTrend'),
      productionTrend: document.getElementById('productionTrend'),
      pueTrend: document.getElementById('pueTrend'),
      efficiencyTrend: document.getElementById('efficiencyTrend')
    };
    
    Object.entries(trendElements).forEach(([key, element]) => {
      if (element) {
        const trendKey = key.replace('Trend', '');
        const trendValue = trends[trendKey];
        
        if (trendValue) {
          const isPositive = (trendKey === 'emissions' || trendKey === 'pue') ? 
            trendValue.startsWith('-') : trendValue.startsWith('+');
          
          element.className = `kpi-change ${isPositive ? 'positive' : 'negative'}`;
          element.textContent = trendValue;
        }
      }
    });
  } catch (error) {
    console.error('Error updating trend indicators:', error);
  }
}

// Update savings projection with proper data binding
function updateSavingsProjection() {
  const projection = appData.savingsProjections[currentTimeRange];
  
  if (!projection) {
    console.error('No projection data for:', currentTimeRange);
    return;
  }
  
  try {
    console.log('Updating savings projection for:', currentTimeRange, projection);
    
    // Update main display
    const savingsAmount = document.getElementById('savingsAmount');
    const savingsPeriod = document.getElementById('savingsPeriod');
    const roiValue = document.getElementById('roiValue');
    const carbonValue = document.getElementById('carbonValue');
    
    if (savingsAmount) {
      savingsAmount.style.transform = 'scale(1.1)';
      savingsAmount.style.color = 'var(--color-primary)';
      setTimeout(() => {
        savingsAmount.textContent = `€${projection.total.toLocaleString()}`;
        savingsAmount.style.transform = '';
        savingsAmount.style.color = '';
      }, 200);
    }
    
    if (savingsPeriod) {
      const periodText = {
        '1month': '1 Month Projection',
        '6months': '6 Months Projection',
        '1year': '1 Year Projection',
        '2years': '2 Years Projection',
        '5years': '5 Years Projection'
      };
      savingsPeriod.textContent = periodText[currentTimeRange];
    }
    
    if (roiValue) roiValue.textContent = projection.roi;
    if (carbonValue) carbonValue.textContent = `${projection.carbonReduction.toLocaleString()} kg`;
    
    // Update breakdown
    const breakdownContainer = document.getElementById('savingsBreakdown');
    if (breakdownContainer) {
      breakdownContainer.innerHTML = Object.entries(projection.breakdown).map(([key, value]) => {
        const labels = {
          'energyOptimization': 'Energy Optimization',
          'workloadScheduling': 'Workload Scheduling',
          'storageUtilization': 'Storage Utilization',
          'contractOptimization': 'Contract Optimization'
        };
        const label = labels[key] || key;
        
        return `
          <div class="breakdown-item">
            <span class="breakdown-label">${label}</span>
            <span class="breakdown-value">€${value.toLocaleString()}</span>
          </div>
        `;
      }).join('');
    }
    
    // Update forecast reliability indicator
    renderForecastReliability();
    
    console.log('Savings projection updated successfully');
  } catch (error) {
    console.error('Error updating savings projection:', error);
  }
}

// Render initial data
function renderInitialData() {
  console.log('Rendering initial data...');
  try {
    updateKPICards();
    updateSavingsProjection();
    // Initialize MIBEL prices (async, but don't block)
    updateMIBELPrices().catch(err => {
      console.warn('MIBEL prices update failed on init:', err);
    });
    
    const lastUpdateElement = document.getElementById('lastUpdateTime');
    if (lastUpdateElement) {
      const lastUpdate = new Date(appData.realTimeData.lastUpdate);
      lastUpdateElement.textContent = lastUpdate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    }
  } catch (error) {
    console.error('Error rendering initial data:', error);
  }
}

// Enhanced Chart Rendering
function renderCharts() {
  console.log('Rendering enhanced charts...');
  
  try {
    renderEfficiencyMetricsChart();
    renderEnergyMixChart();
    renderSustainabilityForecastChart();
  } catch (error) {
    console.error('Error rendering charts:', error);
  }
}

// Energy Efficiency Metrics Chart
function renderEfficiencyMetricsChart() {
  const ctx = document.getElementById('efficiencyMetricsChart');
  if (!ctx) return;
  
  try {
    if (charts.efficiencyMetrics) {
      charts.efficiencyMetrics.destroy();
    }
    
    const timeLabels = getTimeLabels();
    const baseData = appData.timeBasedData[currentTimeView];
    const pueData = timeLabels.map(() => baseData.pue + (Math.random() * 0.1 - 0.05));
    const efficiencyData = timeLabels.map(() => baseData.efficiency + (Math.random() * 2 - 1));
    const renewablePercent = ((appData.realTimeData.currentProduction / (appData.realTimeData.totalConsumption + appData.realTimeData.currentProduction)) * 100);
    const renewableData = timeLabels.map(() => renewablePercent + (Math.random() * 5 - 2.5));
    
    charts.efficiencyMetrics = new Chart(ctx.getContext('2d'), {
      type: 'line',
      data: {
        labels: timeLabels,
        datasets: [
          {
            label: 'PUE (Power Usage Effectiveness)',
            data: pueData,
            borderColor: '#1FB8CD',
            backgroundColor: 'rgba(31, 184, 205, 0.1)',
            tension: 0.4,
            fill: true,
            yAxisID: 'y'
          },
          {
            label: 'Efficiency Score (%)',
            data: efficiencyData,
            borderColor: '#FFC185',
            backgroundColor: 'rgba(255, 193, 133, 0.1)',
            tension: 0.4,
            fill: true,
            yAxisID: 'y1'
          },
          {
            label: 'Renewable Energy %',
            data: renewableData,
            borderColor: '#34C759',
            backgroundColor: 'rgba(52, 199, 89, 0.1)',
            tension: 0.4,
            fill: true,
            yAxisID: 'y2'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          mode: 'index'
        },
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            title: {
              display: true,
              text: 'PUE'
            },
            beginAtZero: false,
            min: 1.0,
            max: 2.0
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            title: {
              display: true,
              text: 'Efficiency %'
            },
            beginAtZero: true,
            max: 100,
            grid: {
              drawOnChartArea: false
            }
          },
          y2: {
            type: 'linear',
            display: false,
            position: 'right',
            beginAtZero: true,
            max: 100,
            grid: {
              drawOnChartArea: false
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error rendering efficiency metrics chart:', error);
  }
}

// Energy Mix Chart
function renderEnergyMixChart() {
  const ctx = document.getElementById('energyMixChart');
  if (!ctx) return;
  
  try {
    // Get accumulated values based on current time view
    const baseSolar = 1240; // base kW
    const baseWind = 680; // base kW
    const baseGrid = 487.7; // base kW
    
    let solarAccumulated, windAccumulated, gridAccumulated, unit = ' kWh', periodLabel = '';
    
    if (currentTimeView === 'hourly') {
      solarAccumulated = baseSolar;
      windAccumulated = baseWind;
      gridAccumulated = baseGrid;
      periodLabel = 'Hour';
    } else if (currentTimeView === 'daily') {
      solarAccumulated = baseSolar * 24;
      windAccumulated = baseWind * 24;
      gridAccumulated = baseGrid * 24;
      periodLabel = 'Day';
    } else if (currentTimeView === 'monthly') {
      solarAccumulated = baseSolar * 24 * 30;
      windAccumulated = baseWind * 24 * 30;
      gridAccumulated = baseGrid * 24 * 30;
      periodLabel = 'Month';
      // Convert to MWh if >= 1000 kWh
      if (solarAccumulated >= 1000) {
        solarAccumulated = solarAccumulated / 1000;
        windAccumulated = windAccumulated / 1000;
        gridAccumulated = gridAccumulated / 1000;
        unit = ' MWh';
      }
    } else if (currentTimeView === 'yearly') {
      solarAccumulated = baseSolar * 24 * 365;
      windAccumulated = baseWind * 24 * 365;
      gridAccumulated = baseGrid * 24 * 365;
      periodLabel = 'Year';
      // Always use MWh for yearly
      solarAccumulated = solarAccumulated / 1000;
      windAccumulated = windAccumulated / 1000;
      gridAccumulated = gridAccumulated / 1000;
      unit = ' MWh';
    }
    
    // Update period note
    const periodNote = document.getElementById('energySourcesPeriodNote');
    if (periodNote) {
      periodNote.textContent = `Accumulated per ${periodLabel}`;
    }
    
    if (charts.energyMix) {
      charts.energyMix.destroy();
    }
    
    charts.energyMix = new Chart(ctx.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Solar Power', 'Wind Power', 'Grid Supply'],
        datasets: [{
          data: [solarAccumulated, windAccumulated, gridAccumulated],
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
          borderWidth: 0,
          hoverOffset: 10
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              padding: 20,
              usePointStyle: true
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const total = context.dataset.data.reduce((sum, val) => sum + val, 0);
                const percentage = ((context.parsed / total) * 100).toFixed(1);
                const value = context.parsed >= 1000 ? (context.parsed / 1000).toFixed(2) + ' MWh' : context.parsed.toFixed(1) + unit;
                return `${context.label}: ${value} (${percentage}%)`;
              }
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error rendering energy mix chart:', error);
  }
}

// Sustainability Forecast Chart
function renderSustainabilityForecastChart() {
  const ctx = document.getElementById('sustainabilityForecastChart');
  if (!ctx) return;
  
  updateSustainabilityForecastChart();
}

function updateSustainabilityForecastChart() {
  const ctx = document.getElementById('sustainabilityForecastChart');
  if (!ctx) return;
  
  try {
    const forecastData = appData.sustainabilityForecast[currentForecastPeriod];
    
    if (charts.sustainabilityForecast) {
      charts.sustainabilityForecast.destroy();
    }
    
    charts.sustainabilityForecast = new Chart(ctx.getContext('2d'), {
      type: 'line',
      data: {
        labels: forecastData.labels,
        datasets: [
          {
            label: 'Energy Consumption',
            data: forecastData.consumption,
            borderColor: '#1FB8CD',
            backgroundColor: 'rgba(31, 184, 205, 0.1)',
            tension: 0.4,
            yAxisID: 'y'
          },
          {
            label: 'Carbon Emissions',
            data: forecastData.emissions,
            borderColor: '#B4413C',
            backgroundColor: 'rgba(180, 65, 60, 0.1)',
            tension: 0.4,
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          mode: 'index'
        },
        plugins: {
          legend: {
            position: 'top'
          }
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            title: {
              display: true,
              text: 'Energy Consumption (kWh)'
            },
            ticks: {
              callback: function(value) {
                return value.toLocaleString();
              }
            }
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            title: {
              display: true,
              text: 'Carbon Emissions (kg CO₂)'
            },
            grid: {
              drawOnChartArea: false
            },
            ticks: {
              callback: function(value) {
                return value.toLocaleString();
              }
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error updating sustainability forecast chart:', error);
  }
}

// Update charts when time view changes
function updateCharts() {
  try {
    // Update efficiency metrics chart when time view changes
    if (charts.efficiencyMetrics) {
      renderEfficiencyMetricsChart();
    }
    // Update energy mix chart when time view changes
    if (charts.energyMix) {
      renderEnergyMixChart();
    }
    
    console.log('Charts updated for time view:', currentTimeView);
  } catch (error) {
    console.error('Error updating charts:', error);
  }
}

// Data helper functions
function getTimeLabels() {
  switch (currentTimeView) {
    case 'hourly':
      return ['6h ago', '5h ago', '4h ago', '3h ago', '2h ago', '1h ago', 'Now'];
    case 'daily':
      return ['6d ago', '5d ago', '4d ago', '3d ago', '2d ago', '1d ago', 'Today'];
    case 'monthly':
      return ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    case 'yearly':
      return ['2020', '2021', '2022', '2023', '2024', '2025'];
    default:
      return ['Now'];
  }
}

function getEnergyBreakdownData() {
  const baseData = appData.timeBasedData[currentTimeView];
  const energyCost = baseData.cost * 0.7; // 70% energy costs
  const variation = energyCost * 0.05;
  
  return getTimeLabels().map(() => 
    energyCost + (Math.random() - 0.5) * variation
  );
}

function getInfrastructureBreakdownData() {
  const baseData = appData.timeBasedData[currentTimeView];
  const infraCost = baseData.cost * 0.2; // 20% infrastructure costs
  const variation = infraCost * 0.03;
  
  return getTimeLabels().map(() => 
    infraCost + (Math.random() - 0.5) * variation
  );
}

function getMaintenanceBreakdownData() {
  const baseData = appData.timeBasedData[currentTimeView];
  const maintCost = baseData.cost * 0.1; // 10% maintenance costs
  const variation = maintCost * 0.08;
  
  return getTimeLabels().map(() => 
    maintCost + (Math.random() - 0.5) * variation
  );
}

// Enhanced Render Available Contracts Table with Max MW and Hybrid Tariffs
function renderContracts() {
  console.log('Rendering contracts with table...');
  
  const contractsTableBody = document.getElementById('contractsTableBody');
  if (!contractsTableBody) {
    console.log('Contracts table body not found');
    return;
  }
  
  try {
    // Get filtered providers
    const filteredProviders = getFilteredProviders();
    
    contractsTableBody.innerHTML = filteredProviders.map(provider => `
      <tr>
        <td>
          <div class="provider-info-cell">
            <div class="provider-logo-small">${provider.logo}</div>
            <div class="provider-name-small">${provider.name}</div>
          </div>
        </td>
        <td>${provider.type}</td>
        <td>${provider.country}</td>
        <td>
          <div class="price-comparison">
            <div class="price-value">€${provider.fixedPrice.toFixed(3)}/kWh</div>
          </div>
        </td>
        <td>
          <div class="price-comparison">
            <div class="price-value">€${provider.marketPrice.toFixed(3)}/kWh</div>
            <div class="price-difference ${provider.fixedPrice < provider.marketPrice ? 'cheaper' : 'expensive'}">
              ${provider.fixedPrice < provider.marketPrice ? 'Cheaper' : 'More expensive'}
            </div>
          </div>
        </td>
        <td>
          ${provider.hasHybridTariff ? `
            <div class="price-comparison">
              <div class="price-value">€${provider.hybridPrice.toFixed(3)}/kWh</div>
              <div class="hybrid-badge">Hybrid</div>
            </div>
          ` : '<span class="no-hybrid">N/A</span>'}
        </td>
        <td>${provider.reliability}%</td>
        <td>${provider.renewablePercent}%</td>
        <td>${provider.capacity} kW</td>
        <td>
          <div class="max-mw-cell ${provider.name === 'AlphaEnergy' ? 'alpha-energy' : ''}">
            <strong>${provider.maxMW || 'N/A'}</strong> MW
          </div>
        </td>
        <td>
          ${provider.isBestValue ? '<div class="best-value-badge">BEST VALUE</div>' : ''}
        </td>
      </tr>
    `).join('');
    
    // Update contract count
    const contractCount = document.getElementById('contractCount');
    if (contractCount) {
      contractCount.textContent = filteredProviders.length;
    }
    
    console.log('Contracts table rendered successfully');
  } catch (error) {
    console.error('Error rendering contracts table:', error);
  }
}

// Filter providers based on criteria
function getFilteredProviders() {
  const maxMWFilter = document.getElementById('maxMWFilter')?.value;
  const tariffTypeFilter = document.getElementById('tariffTypeFilter')?.value;
  const renewableFilter = parseInt(document.getElementById('renewableFilter')?.value || '0');
  
  let filtered = [...appData.energyProviders];
  
  if (maxMWFilter) {
    const maxMW = parseInt(maxMWFilter);
    filtered = filtered.filter(p => p.maxMW <= maxMW);
  }
  
  if (tariffTypeFilter) {
    if (tariffTypeFilter === 'hybrid') {
      filtered = filtered.filter(p => p.hasHybridTariff);
    }
    // For fixed/market, we keep all providers as they all have both
  }
  
  if (renewableFilter > 0) {
    filtered = filtered.filter(p => p.renewablePercent >= renewableFilter);
  }
  
  return filtered;
}

// MIBEL API Configuration
const MIBEL_API_CONFIG = {
  omie: {
    baseUrl: 'https://www.omie.es',
    endpoint: '/en/market-results/daily/daily-market/day-ahead-price',
    apiAvailable: true,
    requiresAuth: false
  },
  esios: {
    baseUrl: 'https://api.esios.ree.es',
    endpoint: '/indicators',
    apiAvailable: true,
    requiresAuth: true,
    // To get an ESIOS API token, visit: https://api.esios.ree.es/
    // Click "Personal token request" and follow the instructions
    token: '' // Set your ESIOS API token here: MIBEL_API_CONFIG.esios.token = 'your-token-here';
  },
  fallbackToSimulated: true
};

// MIBEL Price Tracking and Forecast Functions
async function updateMIBELPrices() {
  console.log('Updating MIBEL prices...');
  try {
    // Try to fetch real-time data from APIs
    let priceData = null;
    
    // Try ESIOS API first (if token is available)
    if (MIBEL_API_CONFIG.esios.token) {
      priceData = await fetchMIBELFromESIOS();
    }
    
    // Fallback to OMIE data scraping if ESIOS fails
    if (!priceData) {
      priceData = await fetchMIBELFromOMIE();
    }
    
    // If all APIs fail, use simulated data
    if (!priceData && MIBEL_API_CONFIG.fallbackToSimulated) {
      priceData = generateSimulatedMIBELPrices();
      console.warn('Using simulated MIBEL prices - API unavailable');
    }
    
    if (priceData) {
      // Update current price
      appData.mibelPrices.current.price = priceData.currentPrice;
      appData.mibelPrices.current.pricePerKWh = priceData.currentPrice / 1000;
      appData.mibelPrices.current.timestamp = new Date().toISOString();
      
      // Update hourly prices
      if (priceData.hourly) {
        appData.mibelPrices.hourly = priceData.hourly;
      }
      
      // Calculate daily average
      const hourlyPrices = appData.mibelPrices.hourly.map(h => h.price);
      appData.mibelPrices.daily.average = hourlyPrices.reduce((a, b) => a + b, 0) / hourlyPrices.length;
      appData.mibelPrices.daily.min = Math.min(...hourlyPrices);
      appData.mibelPrices.daily.max = Math.max(...hourlyPrices);
      
      // Calculate trend
      calculateMIBELTrend();
      
      // Store historical data for accuracy tracking
      storeMIBELHistoricalData(priceData);
      
      // Update index tariffs
      updateIndexTariffPrices();
      
      // Check for early warnings
      checkMIBELEarlyWarnings();
      
      console.log('MIBEL prices updated successfully');
    }
  } catch (error) {
    console.error('Error updating MIBEL prices:', error);
    // Fallback to simulated data on error
    if (MIBEL_API_CONFIG.fallbackToSimulated) {
      const priceData = generateSimulatedMIBELPrices();
      updateMIBELDataFromPriceData(priceData);
    }
  }
}

// Fetch MIBEL prices from ESIOS API
async function fetchMIBELFromESIOS() {
  try {
    // ESIOS Indicator ID for MIBEL spot price (Spain)
    // Indicator 1001 is typically the day-ahead market price
    const indicatorId = '1001';
    const url = `${MIBEL_API_CONFIG.esios.baseUrl}${MIBEL_API_CONFIG.esios.endpoint}/${indicatorId}`;
    
    const headers = {
      'Host': 'api.esios.ree.es',
      'x-api-key': MIBEL_API_CONFIG.esios.token,
      'Accept': 'application/json'
    };
    
    // Get current date range (today)
    const today = new Date();
    const startDate = new Date(today);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(today);
    endDate.setHours(23, 59, 59, 999);
    
    const params = {
      start_date: startDate.toISOString().split('T')[0] + 'T00:00:00',
      end_date: endDate.toISOString().split('T')[0] + 'T23:59:59'
    };
    
    const response = await fetch(`${url}?${new URLSearchParams(params)}`, { headers });
    
    if (!response.ok) {
      throw new Error(`ESIOS API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.indicator && data.indicator.values) {
      const values = data.indicator.values;
      const currentHour = new Date().getHours();
      
      // Process hourly prices
      const hourlyPrices = [];
      for (let hour = 0; hour < 24; hour++) {
        const hourData = values.find(v => {
          const valueHour = new Date(v.datetime_utc).getUTCHours();
          return valueHour === hour;
        });
        
        if (hourData) {
          hourlyPrices.push({
            hour: hour,
            price: hourData.value / 1000, // Convert from €/MWh to €/kWh then back to MWh for consistency
            forecast: false
          });
        } else {
          // Use forecast if actual data not available
          hourlyPrices.push({
            hour: hour,
            price: appData.mibelPrices.hourly[hour]?.price || 0,
            forecast: true
          });
        }
      }
      
      // Get current price
      const currentPriceData = values.find(v => {
        const valueHour = new Date(v.datetime_utc).getUTCHours();
        return valueHour === currentHour;
      });
      
      const currentPrice = currentPriceData ? (currentPriceData.value / 1000) : hourlyPrices[currentHour]?.price || 0;
      
      return {
        currentPrice: currentPrice * 1000, // Convert back to €/MWh
        hourly: hourlyPrices.map(h => ({ hour: h.hour, price: h.price * 1000, forecast: h.forecast }))
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching from ESIOS API:', error);
    return null;
  }
}

// Fetch MIBEL prices from OMIE (scraping approach)
async function fetchMIBELFromOMIE() {
  try {
    // Note: OMIE doesn't have a public API, so we would need to scrape their website
    // For now, we'll use a CORS proxy approach or backend proxy
    // This is a placeholder that shows the structure
    
    const today = new Date();
    const dateParam = today.toISOString().split('T')[0];
    
    // In production, this would be done via a backend proxy to avoid CORS issues
    // For now, return null to trigger fallback
    console.log('OMIE data fetching requires backend proxy - using fallback');
    return null;
    
    // Example structure if backend proxy exists:
    /*
    const response = await fetch(`/api/omie/prices?date=${dateParam}`);
    if (response.ok) {
      const data = await response.json();
      return processOMIEData(data);
    }
    */
  } catch (error) {
    console.error('Error fetching from OMIE:', error);
    return null;
  }
}

// Generate simulated MIBEL prices (fallback)
function generateSimulatedMIBELPrices() {
  const currentHour = new Date().getHours();
  const hourlyPrices = appData.mibelPrices.hourly || [];
  
  // Use existing hourly prices or generate new ones
  const prices = hourlyPrices.length > 0 ? hourlyPrices : generateHourlyPricePattern();
  
  const currentPrice = prices[currentHour]?.price || prices[0]?.price || 89.50;
  
  return {
    currentPrice: currentPrice,
    hourly: prices
  };
}

// Generate hourly price pattern (simulated)
function generateHourlyPricePattern() {
  const basePrice = 90;
  const hourlyPattern = [
    82.30, 78.50, 75.20, 72.10, 70.50, 68.90, // 0-5 (low demand)
    71.20, 85.40, 92.60, 98.20, 105.50, 112.30, // 6-11 (morning ramp)
    118.90, 125.40, 128.20, 124.80, 118.50, 115.20, // 12-17 (afternoon peak)
    122.60, 130.40, 135.80, 128.50, 115.30, 95.60 // 18-23 (evening)
  ];
  
  // Add some random variation (±5%)
  return hourlyPattern.map((price, hour) => ({
    hour: hour,
    price: price * (1 + (Math.random() - 0.5) * 0.1),
    forecast: false
  }));
}

// Update MIBEL data from price data object
function updateMIBELDataFromPriceData(priceData) {
  appData.mibelPrices.current.price = priceData.currentPrice;
  appData.mibelPrices.current.pricePerKWh = priceData.currentPrice / 1000;
  appData.mibelPrices.current.timestamp = new Date().toISOString();
  
  if (priceData.hourly) {
    appData.mibelPrices.hourly = priceData.hourly;
  }
  
  const hourlyPrices = appData.mibelPrices.hourly.map(h => h.price);
  appData.mibelPrices.daily.average = hourlyPrices.reduce((a, b) => a + b, 0) / hourlyPrices.length;
  appData.mibelPrices.daily.min = Math.min(...hourlyPrices);
  appData.mibelPrices.daily.max = Math.max(...hourlyPrices);
  
  calculateMIBELTrend();
  storeMIBELHistoricalData(priceData);
  updateIndexTariffPrices();
  checkMIBELEarlyWarnings();
}

// Calculate MIBEL price trend
function calculateMIBELTrend() {
  const hourlyPrices = appData.mibelPrices.hourly;
  if (!hourlyPrices || hourlyPrices.length < 2) return;
  
  // Compare current average with previous day average (simulated)
  const currentAverage = appData.mibelPrices.daily.average;
  const previousAverage = currentAverage * 0.97; // Simulated previous day
  
  const percentageChange = ((currentAverage - previousAverage) / previousAverage) * 100;
  
  appData.mibelPrices.trend = {
    direction: percentageChange > 0 ? 'increasing' : 'decreasing',
    percentageChange: Math.abs(percentageChange).toFixed(1),
    period: '24h'
  };
}

// Store historical MIBEL data for accuracy tracking
function storeMIBELHistoricalData(priceData) {
  if (!appData.mibelForecast.historicalData) {
    appData.mibelForecast.historicalData = [];
  }
  
  const historicalEntry = {
    date: new Date().toISOString().split('T')[0],
    timestamp: new Date().toISOString(),
    actualPrice: priceData.currentPrice,
    hourlyActual: priceData.hourly,
    forecastUsed: appData.mibelForecast.shortTerm.prices[0] || null
  };
  
  appData.mibelForecast.historicalData.push(historicalEntry);
  
  // Keep only last 30 days
  if (appData.mibelForecast.historicalData.length > 30) {
    appData.mibelForecast.historicalData.shift();
  }
  
  // Calculate forecast accuracy
  calculateForecastAccuracy();
}

function updateIndexTariffPrices() {
  console.log('Updating index tariff prices...');
  try {
    const indexTariffs = appData.indexTariffs.active;
    const mibelCurrent = appData.mibelPrices.current.pricePerKWh;
    
    indexTariffs.forEach(tariff => {
      if (tariff.mibelIndex) {
        // Calculate effective price: basePrice + (MIBEL price * multiplier) + fixed margin
        tariff.currentEffectivePrice = 
          tariff.basePrice + 
          (mibelCurrent * tariff.mibelMultiplier) + 
          tariff.fixedMargin;
        tariff.lastUpdate = new Date().toISOString();
      }
    });
    
    console.log('Index tariff prices updated');
  } catch (error) {
    console.error('Error updating index tariff prices:', error);
  }
}

function checkMIBELEarlyWarnings() {
  console.log('Checking MIBEL early warnings...');
  try {
    if (!appData.mibelEarlyWarnings.enabled) return;
    
    const warnings = [];
    const currentPrice = appData.mibelPrices.current.price;
    const hourlyPrices = appData.mibelPrices.hourly;
    const forecast = appData.mibelForecast.shortTerm;
    const thresholds = appData.mibelEarlyWarnings.thresholds;
    
    // Check for price spikes in forecast
    if (forecast && forecast.prices) {
      forecast.prices.forEach(dayForecast => {
        const priceIncrease = ((dayForecast.average - currentPrice) / currentPrice) * 100;
        
        if (priceIncrease >= thresholds.priceSpike.percentageIncrease) {
          const recommendedActions = generateRecommendedActions('price_spike', {
            priceIncrease: priceIncrease,
            forecastPrice: dayForecast.average,
            date: dayForecast.date,
            severity: priceIncrease >= 25 ? 'high' : 'medium'
          });
          
          warnings.push({
            id: Date.now() + Math.random(),
            type: 'price_spike',
            severity: priceIncrease >= 25 ? 'high' : 'medium',
            message: `Expected price increase of ${priceIncrease.toFixed(1)}% on ${dayForecast.date}`,
            time: new Date().toISOString(),
            recommendedActions: recommendedActions,
            primaryAction: recommendedActions[0],
            impact: {
              estimatedCostIncrease: calculateCostImpact(priceIncrease, dayForecast.average),
              timeWindow: '24 hours',
              date: dayForecast.date
            }
          });
        }
      });
    }
    
    // Check for volatility
    if (forecast && forecast.prices) {
      forecast.prices.forEach(dayForecast => {
        const volatility = ((dayForecast.max - dayForecast.min) / dayForecast.average) * 100;
        
        if (volatility >= thresholds.volatility.highVolatility) {
          const recommendedActions = generateRecommendedActions('volatility', {
            volatility: volatility,
            date: dayForecast.date,
            severity: volatility >= thresholds.volatility.extremeVolatility ? 'high' : 'medium'
          });
          
          warnings.push({
            id: Date.now() + Math.random(),
            type: 'volatility',
            severity: volatility >= thresholds.volatility.extremeVolatility ? 'high' : 'medium',
            message: `High price volatility expected on ${dayForecast.date}: ${volatility.toFixed(1)}%`,
            time: new Date().toISOString(),
            recommendedActions: recommendedActions,
            primaryAction: recommendedActions[0],
            impact: {
              volatilityRange: `±${volatility.toFixed(1)}%`,
              confidence: dayForecast.volatility || 'medium',
              date: dayForecast.date
            }
          });
        }
      });
    }
    
    // Check for sustained trends
    const trend = appData.mibelPrices.trend;
    if (trend && Math.abs(parseFloat(trend.percentageChange)) >= Math.abs(thresholds.trend.sustainedIncrease)) {
      const trendDirection = trend.direction;
      const recommendedActions = generateRecommendedActions('trend', {
        direction: trendDirection,
        percentageChange: parseFloat(trend.percentageChange),
        period: trend.period
      });
      
      warnings.push({
        id: Date.now() + Math.random(),
        type: 'sustained_trend',
        severity: Math.abs(parseFloat(trend.percentageChange)) >= 20 ? 'high' : 'medium',
        message: `Sustained ${trendDirection} trend detected: ${trend.percentageChange}% over ${trend.period}`,
        time: new Date().toISOString(),
        recommendedActions: recommendedActions,
        primaryAction: recommendedActions[0],
        impact: {
          trendDirection: trendDirection,
          percentageChange: trend.percentageChange,
          period: trend.period
        }
      });
    }
    
    // Update active warnings
    appData.mibelEarlyWarnings.activeWarnings = warnings;
    
    // Show notifications for new warnings
    warnings.forEach(warning => {
      showMIBELWarningNotification(warning);
    });
    
    console.log(`MIBEL early warnings checked: ${warnings.length} active warnings`);
  } catch (error) {
    console.error('Error checking MIBEL early warnings:', error);
  }
}

// Generate recommended actions based on warning type and context
function generateRecommendedActions(warningType, context) {
  const actions = [];
  
  switch (warningType) {
    case 'price_spike':
      if (context.severity === 'high') {
        actions.push({
          priority: 1,
          action: 'Discharge battery storage to reduce grid consumption during high-price hours',
          impact: 'high',
          estimatedSavings: calculateBatterySavings(context.forecastPrice),
          implementationTime: 'immediate',
          automated: true
        });
        actions.push({
          priority: 2,
          action: 'Shift non-critical workloads to low-price hours (night/early morning)',
          impact: 'medium',
          estimatedSavings: calculateWorkloadShiftSavings(context.priceIncrease),
          implementationTime: '1-2 hours',
          automated: false
        });
        actions.push({
          priority: 3,
          action: 'Reduce cooling system load during peak hours (if possible)',
          impact: 'medium',
          estimatedSavings: calculateCoolingSavings(context.forecastPrice),
          implementationTime: '30 minutes',
          automated: false
        });
      } else {
        actions.push({
          priority: 1,
          action: 'Monitor price forecasts closely and prepare for price increase',
          impact: 'low',
          estimatedSavings: 0,
          implementationTime: 'ongoing',
          automated: false
        });
        actions.push({
          priority: 2,
          action: 'Consider battery discharge during highest price hours',
          impact: 'medium',
          estimatedSavings: calculateBatterySavings(context.forecastPrice),
          implementationTime: 'immediate',
          automated: true
        });
      }
      break;
      
    case 'volatility':
      actions.push({
        priority: 1,
        action: 'Implement flexible workload scheduling to take advantage of price variations',
        impact: 'high',
        estimatedSavings: calculateVolatilitySavings(context.volatility),
        implementationTime: '2-4 hours',
        automated: true
      });
      actions.push({
        priority: 2,
        action: 'Monitor intraday prices and adjust consumption dynamically',
        impact: 'medium',
        estimatedSavings: 0,
        implementationTime: 'ongoing',
        automated: false
      });
      actions.push({
        priority: 3,
        action: 'Consider partial battery charging/discharging to benefit from price swings',
        impact: 'medium',
        estimatedSavings: calculateBatteryVolatilitySavings(context.volatility),
        implementationTime: '1 hour',
        automated: true
      });
      break;
      
    case 'trend':
      if (context.direction === 'increasing') {
        actions.push({
          priority: 1,
          action: 'Reduce overall consumption during sustained high-price period',
          impact: 'high',
          estimatedSavings: calculateTrendSavings(context.percentageChange),
          implementationTime: 'immediate',
          automated: false
        });
        actions.push({
          priority: 2,
          action: 'Maximize battery and renewable energy usage',
          impact: 'high',
          estimatedSavings: calculateRenewableSavings(),
          implementationTime: 'immediate',
          automated: true
        });
      } else {
        actions.push({
          priority: 1,
          action: 'Charge battery storage during low-price period',
          impact: 'medium',
          estimatedSavings: 0,
          implementationTime: 'immediate',
          automated: true
        });
        actions.push({
          priority: 2,
          action: 'Shift deferred workloads to current low-price window',
          impact: 'medium',
          estimatedSavings: calculateDeferredWorkloadSavings(context.percentageChange),
          implementationTime: '1-2 hours',
          automated: false
        });
      }
      break;
  }
  
  return actions;
}

// Calculate savings from battery discharge
function calculateBatterySavings(forecastPrice) {
  const batteryCapacity = appData.batteryPVSystem?.batterySystem?.capacity || 500; // kWh
  const currentPrice = appData.mibelPrices.current.pricePerKWh;
  const priceDiff = (forecastPrice / 1000) - currentPrice;
  return (batteryCapacity * priceDiff).toFixed(2);
}

// Calculate savings from workload shifting
function calculateWorkloadShiftSavings(priceIncrease) {
  const variableLoad = appData.indexTariffs.active[0]?.consumptionBreakdown?.variableLoad || 1060; // kW
  const hoursToShift = 4; // Assume 4 hours of shiftable workload
  const currentPrice = appData.mibelPrices.current.pricePerKWh;
  const highPrice = currentPrice * (1 + priceIncrease / 100);
  const lowPrice = currentPrice * 0.7; // Assume 30% lower at night
  const savings = (variableLoad * hoursToShift * (highPrice - lowPrice)).toFixed(2);
  return savings;
}

// Calculate savings from cooling reduction
function calculateCoolingSavings(forecastPrice) {
  const coolingLoad = appData.indexConsumption?.cooling || 450; // kW
  const reductionPercent = 0.15; // 15% reduction
  const hours = 4; // Peak hours
  const currentPrice = appData.mibelPrices.current.pricePerKWh;
  const highPrice = forecastPrice / 1000;
  const savings = (coolingLoad * reductionPercent * hours * (highPrice - currentPrice)).toFixed(2);
  return savings;
}

// Calculate savings from volatility arbitrage
function calculateVolatilitySavings(volatility) {
  const batteryCapacity = appData.batteryPVSystem?.batterySystem?.capacity || 500; // kWh
  const cyclesPerDay = 2; // Charge/discharge cycles
  const priceSpread = (volatility / 100) * appData.mibelPrices.current.pricePerKWh;
  const savings = (batteryCapacity * cyclesPerDay * priceSpread * 0.5).toFixed(2); // 50% efficiency
  return savings;
}

// Calculate savings from battery volatility trading
function calculateBatteryVolatilitySavings(volatility) {
  return calculateVolatilitySavings(volatility);
}

// Calculate savings from trend-based actions
function calculateTrendSavings(percentageChange) {
  const consumption = appData.realTimeData.totalConsumption || 2847.5; // kWh/day
  const currentPrice = appData.mibelPrices.current.pricePerKWh;
  const highPrice = currentPrice * (1 + Math.abs(percentageChange) / 100);
  const reductionPercent = 0.1; // 10% consumption reduction
  const savings = (consumption * reductionPercent * (highPrice - currentPrice)).toFixed(2);
  return savings;
}

// Calculate savings from maximizing renewable usage
function calculateRenewableSavings() {
  const production = appData.realTimeData.currentProduction || 1956.3; // kWh
  const currentPrice = appData.mibelPrices.current.pricePerKWh;
  const gridPrice = appData.mibelPrices.current.pricePerKWh;
  const savings = (production * gridPrice).toFixed(2); // Value of self-consumed energy
  return savings;
}

// Calculate savings from deferred workload execution
function calculateDeferredWorkloadSavings(percentageDecrease) {
  const deferredWorkload = 200; // kW of deferrable workload
  const hours = 6; // Hours to defer
  const currentPrice = appData.mibelPrices.current.pricePerKWh;
  const lowPrice = currentPrice * (1 + percentageDecrease / 100);
  const savings = (deferredWorkload * hours * (currentPrice - lowPrice)).toFixed(2);
  return savings;
}

function calculateCostImpact(priceIncrease, forecastPrice) {
  // Estimate cost impact based on current consumption and price increase
  const currentConsumption = appData.realTimeData.totalConsumption || 2847.5; // kWh
  const pricePerKWhIncrease = (forecastPrice / 1000) - appData.mibelPrices.current.pricePerKWh;
  return (currentConsumption * pricePerKWhIncrease).toFixed(2);
}

// Calculate forecast accuracy based on historical data
function calculateForecastAccuracy() {
  if (!appData.mibelForecast.historicalData || appData.mibelForecast.historicalData.length < 2) {
    return;
  }
  
  const historicalData = appData.mibelForecast.historicalData;
  const accuracyMetrics = {
    shortTerm: {
      mape: 0, // Mean Absolute Percentage Error
      mae: 0,  // Mean Absolute Error
      rmse: 0, // Root Mean Square Error
      accuracy: 0,
      dataPoints: 0
    },
    mediumTerm: {
      mape: 0,
      mae: 0,
      rmse: 0,
      accuracy: 0,
      dataPoints: 0
    }
  };
  
  // Calculate accuracy for each forecast type
  historicalData.forEach((entry, index) => {
    if (entry.forecastUsed && entry.actualPrice) {
      const forecastPrice = entry.forecastUsed.average * 1000; // Convert to €/MWh
      const actualPrice = entry.actualPrice;
      
      const error = Math.abs(forecastPrice - actualPrice);
      const percentageError = (error / actualPrice) * 100;
      const squaredError = Math.pow(forecastPrice - actualPrice, 2);
      
      // Determine forecast type based on horizon
      const forecastType = entry.forecastUsed.volatility ? 'shortTerm' : 'mediumTerm';
      
      accuracyMetrics[forecastType].mae += error;
      accuracyMetrics[forecastType].mape += percentageError;
      accuracyMetrics[forecastType].rmse += squaredError;
      accuracyMetrics[forecastType].dataPoints += 1;
    }
  });
  
  // Calculate averages and accuracy percentages
  Object.keys(accuracyMetrics).forEach(type => {
    const metrics = accuracyMetrics[type];
    if (metrics.dataPoints > 0) {
      metrics.mae = (metrics.mae / metrics.dataPoints).toFixed(2);
      metrics.mape = (metrics.mape / metrics.dataPoints).toFixed(2);
      metrics.rmse = Math.sqrt(metrics.rmse / metrics.dataPoints).toFixed(2);
      
      // Accuracy as percentage (100% - MAPE, capped at 100%)
      metrics.accuracy = Math.max(0, Math.min(100, (100 - parseFloat(metrics.mape)))).toFixed(1);
    }
  });
  
  // Store accuracy metrics
  if (!appData.mibelForecast.accuracyMetrics) {
    appData.mibelForecast.accuracyMetrics = {
      current: {},
      historical: []
    };
  }
  
  appData.mibelForecast.accuracyMetrics.current = accuracyMetrics;
  
  // Store historical accuracy (daily snapshot)
  const today = new Date().toISOString().split('T')[0];
  const existingEntry = appData.mibelForecast.accuracyMetrics.historical.find(
    h => h.date === today
  );
  
  if (existingEntry) {
    existingEntry.metrics = accuracyMetrics;
    existingEntry.lastUpdate = new Date().toISOString();
  } else {
    appData.mibelForecast.accuracyMetrics.historical.push({
      date: today,
      metrics: accuracyMetrics,
      lastUpdate: new Date().toISOString()
    });
  }
  
  // Keep only last 30 days of historical accuracy
  if (appData.mibelForecast.accuracyMetrics.historical.length > 30) {
    appData.mibelForecast.accuracyMetrics.historical.shift();
  }
  
  // Update forecast confidence based on historical accuracy
  updateForecastConfidence();
}

// Update forecast confidence based on historical accuracy
function updateForecastConfidence() {
  const accuracyMetrics = appData.mibelForecast.accuracyMetrics?.current;
  
  if (accuracyMetrics) {
    // Update short-term forecast confidence
    if (accuracyMetrics.shortTerm.accuracy) {
      const shortTermAccuracy = parseFloat(accuracyMetrics.shortTerm.accuracy);
      // Confidence is based on accuracy, but also considers recent performance
      appData.mibelForecast.shortTerm.confidence = Math.min(95, Math.max(60, shortTermAccuracy));
    }
    
    // Update medium-term forecast confidence
    if (accuracyMetrics.mediumTerm.accuracy) {
      const mediumTermAccuracy = parseFloat(accuracyMetrics.mediumTerm.accuracy);
      appData.mibelForecast.mediumTerm.confidence = Math.min(85, Math.max(50, mediumTermAccuracy * 0.9));
    }
  }
}

// Render forecast accuracy metrics
function renderForecastAccuracy() {
  console.log('[FORECAST ACCURACY] ========== FUNCTION CALLED ==========');
  
  const accuracyContainer = document.getElementById('forecastAccuracyContainer');
  if (!accuracyContainer) {
    console.error('[FORECAST ACCURACY] ❌ Container "forecastAccuracyContainer" not found in DOM!');
    return;
  }
  
  console.log('[FORECAST ACCURACY] ✅ Container found');
  
  try {
    const accuracyMetrics = appData.mibelForecast.accuracyMetrics?.current;
    
    if (!accuracyMetrics) {
      accuracyContainer.innerHTML = `
        <div class="accuracy-not-available">
          <p>Forecast accuracy metrics will be available after collecting historical data.</p>
        </div>
      `;
      return;
    }
    
    accuracyContainer.innerHTML = `
      <div class="forecast-accuracy-grid">
        ${Object.keys(accuracyMetrics).map(type => {
          const metrics = accuracyMetrics[type];
          if (metrics.dataPoints === 0) return '';
          
          const typeLabel = type === 'shortTerm' ? 'Short-term (24-48h)' : 'Medium-term (7 days)';
          const accuracyClass = parseFloat(metrics.accuracy) >= 80 ? 'high' : 
                                parseFloat(metrics.accuracy) >= 60 ? 'medium' : 'low';
          
          return `
            <div class="accuracy-card ${accuracyClass}">
              <div class="accuracy-header">
                <h4>${typeLabel}</h4>
                <span class="accuracy-badge ${accuracyClass}">${metrics.accuracy}%</span>
              </div>
              <div class="accuracy-metrics">
                <div class="metric-item">
                  <span class="metric-label">MAPE</span>
                  <span class="metric-value">${metrics.mape}%</span>
                </div>
                <div class="metric-item">
                  <span class="metric-label">MAE</span>
                  <span class="metric-value">€${metrics.mae}/MWh</span>
                </div>
                <div class="metric-item">
                  <span class="metric-label">RMSE</span>
                  <span class="metric-value">€${metrics.rmse}/MWh</span>
                </div>
                <div class="metric-item">
                  <span class="metric-label">Data Points</span>
                  <span class="metric-value">${metrics.dataPoints}</span>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
      
      ${appData.mibelForecast.accuracyMetrics.historical.length > 0 ? `
        <div class="accuracy-history">
          <h4>Accuracy Trend (Last 7 Days)</h4>
          <div class="accuracy-chart-container" style="position: relative; height: 250px; margin-top: 1rem;">
            <canvas id="forecastAccuracyChart"></canvas>
          </div>
        </div>
      ` : ''}
    `;
    
    // Render accuracy trend chart after HTML is inserted
    const historicalLength = appData.mibelForecast.accuracyMetrics?.historical?.length || 0;
    console.log(`[FORECAST ACCURACY] Historical data points: ${historicalLength}`);
    
    if (historicalLength > 0) {
      console.log('[FORECAST ACCURACY] Scheduling accuracy chart render in 100ms');
      setTimeout(() => {
        renderForecastAccuracyChart();
      }, 100);
    } else {
      console.log('[FORECAST ACCURACY] No historical data - skipping chart render');
    }
  } catch (error) {
    console.error('Error rendering forecast accuracy:', error);
  }
}

// Render accuracy trend chart (HTML version - kept for backwards compatibility)
function renderAccuracyTrendChart() {
  const historical = appData.mibelForecast.accuracyMetrics.historical.slice(-7);
  
  if (historical.length === 0) return '';
  
  return historical.map(entry => {
    const shortTermAccuracy = parseFloat(entry.metrics.shortTerm?.accuracy || 0);
    const mediumTermAccuracy = parseFloat(entry.metrics.mediumTerm?.accuracy || 0);
    const date = new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    
    return `
      <div class="accuracy-bar-group">
        <div class="bar-label">${date}</div>
        <div class="bars">
          <div class="accuracy-bar short-term" style="height: ${shortTermAccuracy}%" title="Short-term: ${shortTermAccuracy}%"></div>
          <div class="accuracy-bar medium-term" style="height: ${mediumTermAccuracy}%" title="Medium-term: ${mediumTermAccuracy}%"></div>
        </div>
      </div>
    `;
  }).join('');
}

// Render Forecast Accuracy Chart using Chart.js
function renderForecastAccuracyChart() {
  console.log('[CHART] Attempting to render forecast accuracy chart');
  
  const ctx = document.getElementById('forecastAccuracyChart');
  if (!ctx) {
    console.error('[CHART] Forecast accuracy chart canvas not found');
    console.log('[CHART] Available canvases:', Array.from(document.querySelectorAll('canvas')).map(c => c.id));
    return;
  }
  
  console.log('[CHART] Found forecast accuracy canvas');
  
  try {
    const historical = appData.mibelForecast.accuracyMetrics.historical.slice(-7);
    
    console.log(`[CHART] Historical accuracy data points: ${historical.length}`);
    
    if (historical.length === 0) {
      console.warn('[CHART] No historical data available for accuracy chart');
      return;
    }
    
    // Destroy existing chart if it exists
    if (charts.forecastAccuracy) {
      console.log('[CHART] Destroying existing forecast accuracy chart');
      charts.forecastAccuracy.destroy();
    }
    
    const labels = historical.map(entry => {
      const date = new Date(entry.date);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    });
    
    const shortTermData = historical.map(entry => parseFloat(entry.metrics.shortTerm?.accuracy || 0));
    const mediumTermData = historical.map(entry => parseFloat(entry.metrics.mediumTerm?.accuracy || 0));
    
    charts.forecastAccuracy = new Chart(ctx.getContext('2d'), {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Short-term (24-48h)',
            data: shortTermData,
            backgroundColor: 'rgba(31, 184, 205, 0.7)',
            borderColor: 'rgb(31, 184, 205)',
            borderWidth: 2
          },
          {
            label: 'Medium-term (7 days)',
            data: mediumTermData,
            backgroundColor: 'rgba(255, 193, 133, 0.7)',
            borderColor: 'rgb(255, 193, 133)',
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: 'var(--color-text)',
              usePointStyle: true,
              padding: 15
            }
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#fff',
            bodyColor: '#fff',
            borderColor: 'rgba(31, 184, 205, 0.5)',
            borderWidth: 1,
            callbacks: {
              label: function(context) {
                return `${context.dataset.label}: ${context.parsed.y.toFixed(1)}%`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
              drawBorder: false
            },
            ticks: {
              color: 'var(--color-text-secondary)',
              font: {
                size: 11
              }
            }
          },
          y: {
            beginAtZero: true,
            max: 100,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
              drawBorder: false
            },
            ticks: {
              color: 'var(--color-text-secondary)',
              font: {
                size: 11
              },
              callback: function(value) {
                return value + '%';
              }
            },
            title: {
              display: true,
              text: 'Accuracy (%)',
              color: 'var(--color-text)',
              font: {
                size: 12,
                weight: 'bold'
              }
            }
          }
        }
      }
    });
    
    console.log('[CHART] ✅ Successfully created forecast accuracy chart');
  } catch (error) {
    console.error('[CHART] ❌ Error rendering forecast accuracy chart:', error);
  }
}

function showMIBELWarningNotification(warning) {
  // Add to notification system
  const notification = {
    id: warning.id,
    type: 'mibel_warning',
    title: 'MIBEL Price Alert',
    message: warning.message,
    severity: warning.severity,
    timestamp: new Date().toISOString(),
    action: warning.recommendedAction,
    data: warning
  };
  
  // Add to app notifications if notification system exists
  if (typeof addNotification === 'function') {
    addNotification(notification);
  } else {
    console.log('MIBEL Warning:', notification);
  }
}

function renderMIBELPrices() {
  console.log('[MIBEL PRICES] ========== FUNCTION CALLED ==========');
  console.log('Rendering MIBEL prices...');
  
  const mibelContainer = document.getElementById('mibelPricesContainer');
  if (!mibelContainer) {
    console.error('[MIBEL PRICES] ❌ Container "mibelPricesContainer" not found in DOM!');
    console.log('[MIBEL PRICES] Available IDs:', Array.from(document.querySelectorAll('[id]')).map(el => el.id).filter(id => id.includes('mibel') || id.includes('forecast')));
    return;
  }
  
  console.log('[MIBEL PRICES] ✅ Container found');
  
  try {
    // Check if data exists
    if (!appData.mibelPrices || !appData.mibelPrices.current) {
      console.warn('MIBEL prices data not available');
      mibelContainer.innerHTML = `
        <div class="mibel-price-card">
          <div class="mibel-header">
            <h3>MIBEL Current Price</h3>
            <span class="mibel-source">Source: Loading...</span>
          </div>
          <div class="mibel-current-price">
            <div class="price-value-large">Loading...</div>
            <div class="price-unit">--</div>
            <div class="price-per-kwh">--</div>
          </div>
        </div>
      `;
      return;
    }
    
    const mibelData = appData.mibelPrices;
    
    mibelContainer.innerHTML = `
      <div class="mibel-price-card">
        <div class="mibel-header">
          <h3>MIBEL Current Price</h3>
          <span class="mibel-source">Source: ${mibelData.current.source || 'OMIE'}</span>
        </div>
        <div class="mibel-current-price">
          <div class="price-value-large">€${(mibelData.current.price || 0).toFixed(2)}</div>
          <div class="price-unit">${mibelData.current.unit || '€/MWh'}</div>
          <div class="price-per-kwh">€${((mibelData.current.pricePerKWh || mibelData.current.price / 1000) || 0).toFixed(4)}/kWh</div>
        </div>
        <div class="mibel-daily-stats">
          <div class="stat-item">
            <span class="stat-label">Daily Average</span>
            <span class="stat-value">€${(mibelData.daily?.average || 0).toFixed(2)}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Min</span>
            <span class="stat-value">€${(mibelData.daily?.min || 0).toFixed(2)}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Max</span>
            <span class="stat-value">€${(mibelData.daily?.max || 0).toFixed(2)}</span>
          </div>
        </div>
        <div class="mibel-trend">
          <span class="trend-label">24h Trend:</span>
          <span class="trend-value ${mibelData.trend?.direction || 'stable'}">
            ${mibelData.trend?.direction === 'increasing' ? '↑' : mibelData.trend?.direction === 'decreasing' ? '↓' : '→'} ${mibelData.trend?.percentageChange || '0'}%
          </span>
        </div>
        <div class="mibel-update-time">
          Last updated: ${mibelData.current.timestamp ? new Date(mibelData.current.timestamp).toLocaleString() : 'Never'}
        </div>
      </div>
    `;
  } catch (error) {
    console.error('Error rendering MIBEL prices:', error);
    mibelContainer.innerHTML = `
      <div class="mibel-price-card">
        <div class="mibel-header">
          <h3>MIBEL Current Price</h3>
        </div>
        <div class="mibel-current-price">
          <div style="color: #ef4444;">Error loading prices</div>
        </div>
      </div>
    `;
  }
}

function renderMIBELForecast() {
  console.log('[MIBEL FORECAST] ========== FUNCTION CALLED ==========');
  console.log('Rendering MIBEL forecast...');
  
  const forecastContainer = document.getElementById('mibelForecastContainer');
  if (!forecastContainer) {
    console.error('[MIBEL FORECAST] ❌ Container "mibelForecastContainer" not found in DOM!');
    console.log('[MIBEL FORECAST] Available IDs:', Array.from(document.querySelectorAll('[id]')).map(el => el.id).filter(id => id.includes('mibel') || id.includes('forecast')));
    return;
  }
  
  console.log('[MIBEL FORECAST] ✅ Container found');
  
  try {
    // Check if data exists
    if (!appData.mibelForecast || !appData.mibelForecast.shortTerm) {
      console.warn('MIBEL forecast data not available');
      forecastContainer.innerHTML = `
        <div class="mibel-forecast-section">
          <div class="forecast-tabs">
            <button class="forecast-tab active" data-forecast="shortTerm">24-48h</button>
            <button class="forecast-tab" data-forecast="mediumTerm">7 Days</button>
            <button class="forecast-tab" data-forecast="longTerm">30 Days</button>
          </div>
          <div class="forecast-content">
            <p>Forecast data loading...</p>
          </div>
        </div>
      `;
      return;
    }
    
    const forecast = appData.mibelForecast;
    const shortTerm = forecast.shortTerm;
    const mediumTerm = forecast.mediumTerm;
    
    forecastContainer.innerHTML = `
      <div class="mibel-forecast-section">
        <div class="forecast-tabs">
          <button class="forecast-tab active" data-forecast="shortTerm">24-48h</button>
          <button class="forecast-tab" data-forecast="mediumTerm">7 Days</button>
          <button class="forecast-tab" data-forecast="longTerm">30 Days</button>
        </div>
        
        <div class="forecast-content" id="forecastContent">
          ${renderForecastContent('shortTerm', shortTerm)}
        </div>
      </div>
    `;
    
    // Render initial chart
    setTimeout(() => {
      console.log('[MIBEL] Rendering initial forecast chart for shortTerm');
      renderMIBELForecastChart('shortTerm', shortTerm);
      
      // Add tab event listeners after a brief delay to ensure DOM is ready
      const tabs = forecastContainer.querySelectorAll('.forecast-tab');
      console.log(`[MIBEL] Found ${tabs.length} forecast tabs`);
      
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          
          const forecastType = tab.dataset.forecast;
          const forecastData = forecast[forecastType];
          console.log(`[MIBEL] Tab clicked: ${forecastType}`);
          
          const contentDiv = document.getElementById('forecastContent');
          if (contentDiv && forecastData) {
            contentDiv.innerHTML = renderForecastContent(forecastType, forecastData);
            // Render chart for the selected tab
            setTimeout(() => {
              console.log(`[MIBEL] Rendering chart for ${forecastType}`);
              renderMIBELForecastChart(forecastType, forecastData);
            }, 50);
          }
        });
      });
    }, 100);
  } catch (error) {
    console.error('Error rendering MIBEL forecast:', error);
    forecastContainer.innerHTML = `
      <div class="mibel-forecast-section">
        <div style="color: #ef4444; padding: 2rem; text-align: center;">
          Error loading forecast data
        </div>
      </div>
    `;
  }
}

function renderForecastContent(type, data) {
  if (!data) return '';
  
  if (type === 'shortTerm' || type === 'mediumTerm') {
    const chartId = `mibelForecastChart_${type}`;
    return `
      <div class="forecast-details">
        <div class="forecast-meta">
          <span class="forecast-method">Method: ${data.method}</span>
          <span class="forecast-confidence">Confidence: ${data.confidence}%</span>
        </div>
        <div class="forecast-chart-container" style="position: relative; height: 300px; margin-bottom: 1.5rem;">
          <canvas id="${chartId}"></canvas>
        </div>
        <div class="forecast-prices-table">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Average</th>
                <th>Min</th>
                <th>Max</th>
                ${type === 'shortTerm' ? '<th>Volatility</th>' : ''}
              </tr>
            </thead>
            <tbody>
              ${data.prices.map(price => `
                <tr>
                  <td>${price.date}</td>
                  <td>€${price.average.toFixed(2)}</td>
                  <td>€${price.min.toFixed(2)}</td>
                  <td>€${price.max.toFixed(2)}</td>
                  ${type === 'shortTerm' ? `<td>${price.volatility || 'N/A'}</td>` : ''}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else if (type === 'longTerm') {
    const chartId = `mibelForecastChart_longTerm`;
    return `
      <div class="forecast-details">
        <div class="forecast-meta">
          <span class="forecast-method">Method: ${data.method}</span>
          <span class="forecast-confidence">Confidence: ${data.confidence}%</span>
        </div>
        <div class="forecast-chart-container" style="position: relative; height: 300px; margin-bottom: 1.5rem;">
          <canvas id="${chartId}"></canvas>
        </div>
        <div class="forecast-weekly">
          ${data.weeklyAverage.map(week => `
            <div class="week-forecast">
              <div class="week-info">
                <span class="week-number">Week ${week.week}</span>
                <span class="week-trend ${week.trend}">${week.trend}</span>
              </div>
              <div class="week-price">€${week.average.toFixed(2)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  return '';
}

// Render MIBEL Forecast Chart
function renderMIBELForecastChart(type, data) {
  console.log(`[CHART] Attempting to render MIBEL forecast chart for ${type}`);
  
  if (!data) {
    console.warn(`[CHART] No data provided for ${type}`);
    return;
  }
  
  console.log(`[CHART] Data for ${type}:`, data);
  
  const chartId = `mibelForecastChart_${type}`;
  const ctx = document.getElementById(chartId);
  
  if (!ctx) {
    console.error(`[CHART] Canvas element "${chartId}" not found in DOM`);
    console.log('[CHART] Available canvases:', Array.from(document.querySelectorAll('canvas')).map(c => c.id));
    return;
  }
  
  console.log(`[CHART] Found canvas element: ${chartId}`);
  
  try {
    // Check if Chart.js is loaded
    if (typeof Chart === 'undefined') {
      console.error('[CHART] Chart.js is not loaded!');
      return;
    }
    
    // Destroy existing chart if it exists
    const chartKey = `mibelForecast_${type}`;
    if (charts[chartKey]) {
      console.log(`[CHART] Destroying existing chart: ${chartKey}`);
      charts[chartKey].destroy();
    }
    
    let labels, datasets;
    
    if (type === 'shortTerm' || type === 'mediumTerm') {
      // For short-term and medium-term forecasts
      labels = data.prices.map(p => {
        const date = new Date(p.date);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      });
      
      datasets = [
        {
          label: 'Average Price',
          data: data.prices.map(p => p.average),
          borderColor: 'rgb(31, 184, 205)',
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
          tension: 0.4,
          fill: true,
          pointRadius: 5,
          pointHoverRadius: 7
        },
        {
          label: 'Min Price',
          data: data.prices.map(p => p.min),
          borderColor: 'rgb(34, 197, 94)',
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          tension: 0.4,
          fill: false,
          pointRadius: 3,
          pointHoverRadius: 5,
          borderDash: [5, 5]
        },
        {
          label: 'Max Price',
          data: data.prices.map(p => p.max),
          borderColor: 'rgb(239, 68, 68)',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          tension: 0.4,
          fill: false,
          pointRadius: 3,
          pointHoverRadius: 5,
          borderDash: [5, 5]
        }
      ];
    } else if (type === 'longTerm') {
      // For long-term forecasts
      labels = data.weeklyAverage.map(w => `Week ${w.week}`);
      
      datasets = [
        {
          label: 'Weekly Average Price',
          data: data.weeklyAverage.map(w => w.average),
          borderColor: 'rgb(31, 184, 205)',
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
          tension: 0.4,
          fill: true,
          pointRadius: 6,
          pointHoverRadius: 8
        }
      ];
    }
    
    console.log(`[CHART] Creating chart with labels:`, labels);
    console.log(`[CHART] Number of datasets:`, datasets.length);
    
    charts[chartKey] = new Chart(ctx.getContext('2d'), {
      type: 'line',
      data: {
        labels: labels,
        datasets: datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: 'var(--color-text)',
              usePointStyle: true,
              padding: 15
            }
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#fff',
            bodyColor: '#fff',
            borderColor: 'rgba(31, 184, 205, 0.5)',
            borderWidth: 1,
            callbacks: {
              label: function(context) {
                return `${context.dataset.label}: €${context.parsed.y.toFixed(2)}/MWh`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
              drawBorder: false
            },
            ticks: {
              color: 'var(--color-text-secondary)',
              font: {
                size: 11
              }
            }
          },
          y: {
            beginAtZero: false,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
              drawBorder: false
            },
            ticks: {
              color: 'var(--color-text-secondary)',
              font: {
                size: 11
              },
              callback: function(value) {
                return '€' + value.toFixed(0);
              }
            },
            title: {
              display: true,
              text: 'Price (€/MWh)',
              color: 'var(--color-text)',
              font: {
                size: 12,
                weight: 'bold'
              }
            }
          }
        },
        interaction: {
          mode: 'nearest',
          axis: 'x',
          intersect: false
        }
      }
    });
    
    console.log(`[CHART] ✅ Successfully created chart: ${chartKey}`);
  } catch (error) {
    console.error(`[CHART] ❌ Error rendering MIBEL forecast chart for ${type}:`, error);
  }
}

function renderMIBELEarlyWarnings() {
  console.log('Rendering MIBEL early warnings...');
  
  const warningsContainer = document.getElementById('mibelWarningsContainer');
  if (!warningsContainer) {
    console.warn('MIBEL warnings container not found');
    return;
  }
  
  try {
    // Check if data exists
    if (!appData.mibelEarlyWarnings) {
      console.warn('MIBEL warnings data not available');
      warningsContainer.innerHTML = `
        <div class="no-warnings">
          <span class="no-warnings-icon">⏳</span>
          <p>Loading warnings...</p>
        </div>
      `;
      return;
    }
    
    const warnings = appData.mibelEarlyWarnings.activeWarnings || [];
    
    if (warnings.length === 0) {
      warningsContainer.innerHTML = `
        <div class="no-warnings">
          <span class="no-warnings-icon">✅</span>
          <p>No active warnings. Market conditions are stable.</p>
        </div>
      `;
      return;
    }
    
    warningsContainer.innerHTML = warnings.map(warning => {
      const severityClass = warning.severity === 'high' ? 'warning-high' : 
                           warning.severity === 'medium' ? 'warning-medium' : 'warning-low';
      const warningIcon = warning.severity === 'high' ? '🚨' : 
                         warning.severity === 'medium' ? '⚠️' : 'ℹ️';
      
      return `
        <div class="mibel-warning-card ${severityClass}">
          <div class="warning-header">
            <span class="warning-icon">${warningIcon}</span>
            <div class="warning-title">
              <h4>${warning.type.replace('_', ' ').toUpperCase()}</h4>
              <span class="warning-time">${new Date(warning.time).toLocaleString()}</span>
            </div>
            <span class="warning-severity">${warning.severity}</span>
          </div>
          <div class="warning-message">
            <p>${warning.message}</p>
          </div>
          ${warning.recommendedActions && warning.recommendedActions.length > 0 ? `
            <div class="warning-actions">
              <h5>Recommended Actions:</h5>
              ${warning.recommendedActions.map((action, index) => `
                <div class="recommended-action-item priority-${action.priority}">
                  <div class="action-header">
                    <span class="action-priority">Priority ${action.priority}</span>
                    <span class="action-impact ${action.impact}">${action.impact} impact</span>
                    ${action.automated ? '<span class="action-automated">🤖 Automated</span>' : ''}
                  </div>
                  <div class="action-description">${action.action}</div>
                  ${action.estimatedSavings > 0 ? `
                    <div class="action-savings">
                      <span class="savings-label">Estimated Savings:</span>
                      <span class="savings-value">€${parseFloat(action.estimatedSavings).toLocaleString()}</span>
                    </div>
                  ` : ''}
                  <div class="action-metadata">
                    <span class="action-time">⏱️ ${action.implementationTime}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : `
            <div class="warning-action">
              <strong>Recommended:</strong> ${warning.primaryAction?.action || warning.recommendedAction || 'Monitor forecasts closely'}
            </div>
          `}
          ${warning.impact ? `
            <div class="warning-impact">
              ${warning.impact.estimatedCostIncrease ? 
                `<span>Estimated cost impact: €${warning.impact.estimatedCostIncrease}</span>` : ''}
              ${warning.impact.volatilityRange ? 
                `<span>Volatility: ${warning.impact.volatilityRange}</span>` : ''}
              ${warning.impact.timeWindow ? 
                `<span>Time window: ${warning.impact.timeWindow}</span>` : ''}
            </div>
          ` : ''}
        </div>
      `;
    }).join('');
  } catch (error) {
    console.error('Error rendering MIBEL early warnings:', error);
  }
}

function renderIndexTariffs() {
  console.log('Rendering index tariffs...');
  
  const tariffsContainer = document.getElementById('indexTariffsContainer');
  if (!tariffsContainer) return;
  
  try {
    const tariffs = appData.indexTariffs.active;
    
    tariffsContainer.innerHTML = tariffs.map(tariff => {
      const mibelPrice = appData.mibelPrices.current.pricePerKWh;
      const mibelComponent = mibelPrice * tariff.mibelMultiplier;
      const effectivePrice = tariff.currentEffectivePrice;
      
      return `
        <div class="index-tariff-card">
          <div class="tariff-header">
            <h4>${tariff.provider}</h4>
            <span class="tariff-type-badge">Index Tariff</span>
          </div>
          <div class="tariff-pricing">
            <div class="price-breakdown">
              <div class="price-component">
                <span class="component-label">Base Price:</span>
                <span class="component-value">€${tariff.basePrice.toFixed(3)}/kWh</span>
              </div>
              <div class="price-component">
                <span class="component-label">MIBEL Component (${(tariff.mibelMultiplier * 100).toFixed(0)}%):</span>
                <span class="component-value">€${mibelComponent.toFixed(4)}/kWh</span>
              </div>
              <div class="price-component">
                <span class="component-label">Fixed Margin:</span>
                <span class="component-value">€${tariff.fixedMargin.toFixed(3)}/kWh</span>
              </div>
              <div class="price-component total">
                <span class="component-label">Effective Price:</span>
                <span class="component-value">€${effectivePrice.toFixed(4)}/kWh</span>
              </div>
            </div>
          </div>
          <div class="tariff-consumption">
            <div class="consumption-item">
              <span>Base Load:</span>
              <strong>${tariff.consumptionBreakdown.baseLoad} kW</strong>
            </div>
            <div class="consumption-item">
              <span>Variable Load:</span>
              <strong>${tariff.consumptionBreakdown.variableLoad} kW</strong>
            </div>
          </div>
          <div class="tariff-update-info">
            <span>Last updated: ${new Date(tariff.lastUpdate).toLocaleString()}</span>
            <span>Update frequency: ${tariff.updateFrequency}</span>
          </div>
        </div>
      `;
    }).join('');
  } catch (error) {
    console.error('Error rendering index tariffs:', error);
  }
}

function renderSustainability() {
  console.log('Sustainability section rendered');
  renderCO2Visualizations();
  renderCO2Offers();
  updateSustainabilityForecastChart();
}

// Render CO2 Visualizations
function renderCO2Visualizations() {
  renderCO2SourceChart();
  renderCO2ZoneChart();
  renderCO2TargetsChart();
}

// CO2 Emissions by Source Chart
function renderCO2SourceChart() {
  const ctx = document.getElementById('co2SourceChart');
  if (!ctx) return;
  
  try {
    const co2Data = appData.co2Emissions.detailedBreakdown.bySource;
    
    if (charts.co2Source) {
      charts.co2Source.destroy();
    }
    
    charts.co2Source = new Chart(ctx.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: Object.keys(co2Data).map(k => k.charAt(0).toUpperCase() + k.slice(1)),
        datasets: [{
          data: Object.values(co2Data).map(v => v.emissions),
          backgroundColor: [
            'rgba(34, 197, 94, 0.8)',  // Green for solar
            'rgba(59, 130, 246, 0.8)', // Blue for wind
            'rgba(239, 68, 68, 0.8)',  // Red for grid
            'rgba(168, 85, 247, 0.8)'  // Purple for battery
          ]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.label || '';
                const value = context.parsed || 0;
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const percentage = ((value / total) * 100).toFixed(1);
                return `${label}: ${value.toFixed(1)} kg CO₂ (${percentage}%)`;
              }
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error rendering CO2 source chart:', error);
  }
}

// CO2 Emissions by Zone Chart
function renderCO2ZoneChart() {
  const ctx = document.getElementById('co2ZoneChart');
  if (!ctx) return;
  
  try {
    const co2Data = appData.co2Emissions.detailedBreakdown.byZone;
    
    if (charts.co2Zone) {
      charts.co2Zone.destroy();
    }
    
    charts.co2Zone = new Chart(ctx.getContext('2d'), {
      type: 'bar',
      data: {
        labels: Object.keys(co2Data).map(k => k.replace(/([A-Z])/g, ' $1').trim()),
        datasets: [{
          label: 'CO₂ Emissions (kg)',
          data: Object.values(co2Data).map(v => v.emissions),
          backgroundColor: 'rgba(239, 68, 68, 0.6)',
          borderColor: 'rgba(239, 68, 68, 1)',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'CO₂ Emissions (kg)'
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error rendering CO2 zone chart:', error);
  }
}

// CO2 Reduction Targets Chart
function renderCO2TargetsChart() {
  const ctx = document.getElementById('co2TargetsChart');
  if (!ctx) return;
  
  try {
    const targets = appData.co2Emissions.reductionTargets;
    
    if (charts.co2Targets) {
      charts.co2Targets.destroy();
    }
    
    charts.co2Targets = new Chart(ctx.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['2024', '2025', '2026'],
        datasets: [
          {
            label: 'Current Emissions',
            data: [targets.current, null, null],
            borderColor: 'rgba(239, 68, 68, 1)',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            tension: 0.4
          },
          {
            label: 'Target 2025',
            data: [null, targets.target2025, null],
            borderColor: 'rgba(251, 191, 36, 1)',
            backgroundColor: 'rgba(251, 191, 36, 0.1)',
            tension: 0.4,
            borderDash: [5, 5]
          },
          {
            label: 'Target 2026',
            data: [null, null, targets.target2026],
            borderColor: 'rgba(34, 197, 94, 1)',
            backgroundColor: 'rgba(34, 197, 94, 0.1)',
            tension: 0.4,
            borderDash: [5, 5]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'CO₂ Emissions (kg)'
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error rendering CO2 targets chart:', error);
  }
}

// Render CO2 Offers
function renderCO2Offers() {
  const co2OffersGrid = document.getElementById('co2OffersGrid');
  if (!co2OffersGrid) return;
  
  try {
    const offers = appData.co2Emissions.multiLevelOffers;
    
    co2OffersGrid.innerHTML = offers.map(offer => `
      <div class="co2-offer-card level-${offer.level}">
        <div class="co2-offer-header">
          <div class="co2-offer-level-badge">Level ${offer.level}</div>
          <h4>${offer.name}</h4>
        </div>
        <div class="co2-offer-details">
          <div class="co2-offer-metric">
            <span class="co2-offer-label">CO₂ Reduction:</span>
            <span class="co2-offer-value">${offer.reduction} kg</span>
          </div>
          <div class="co2-offer-metric">
            <span class="co2-offer-label">Cost:</span>
            <span class="co2-offer-value">€${offer.cost}</span>
          </div>
          <p class="co2-offer-description">${offer.description}</p>
        </div>
        <button class="btn btn--primary btn--sm">Select Offer</button>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error rendering CO2 offers:', error);
  }
}

// Enhanced Workload Rendering
function renderWorkload() {
  console.log('Rendering workload section...');
  renderTaskCards();
  renderWorkloadRecommendations();
  updateTaskSummary();
}

function renderTaskCards() {
  const taskGrid = document.getElementById('taskGrid');
  if (!taskGrid) return;
  
  try {
    taskGrid.innerHTML = appData.workload.activeTasks.map(task => `
      <div class="task-card priority-${task.priority.toLowerCase()} status-${task.status.toLowerCase()}">
        <div class="task-header">
          <div class="task-title">
            <div class="task-icon">${task.icon}</div>
            <div class="task-info">
              <h4>${task.name}</h4>
              <p class="task-description">${task.description}</p>
            </div>
          </div>
          <div class="task-priority ${task.priority.toLowerCase()}">${task.priority}</div>
        </div>
        
        <div class="task-metrics">
          <div class="task-metric">
            <span class="task-metric-label">Energy</span>
            <span class="task-metric-value">${task.energyConsumption} kW</span>
          </div>
          <div class="task-metric">
            <span class="task-metric-label">Cost/h</span>
            <span class="task-metric-value">€${task.costPerHour}</span>
          </div>
          <div class="task-metric">
            <span class="task-metric-label">Runtime</span>
            <span class="task-metric-value">${task.runtime}</span>
          </div>
          <div class="task-metric">
            <span class="task-metric-label">CPU/RAM</span>
            <span class="task-metric-value">${task.cpuUsage}%/${task.memoryUsage}%</span>
          </div>
        </div>
        
        <div class="task-actions">
          <button class="btn btn--sm btn--outline">Details</button>
        </div>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error rendering task cards:', error);
  }
}

// CHANGE 2: Render AI Recommendations as Individual Boxes
function renderWorkloadRecommendations() {
  const recommendationsContainer = document.getElementById('workloadRecommendations');
  if (!recommendationsContainer) {
    console.log('Workload recommendations container not found');
    return;
  }
  
  try {
    console.log('Rendering AI recommendation boxes...');
    recommendationsContainer.innerHTML = appData.workload.aiRecommendations.map(rec => `
      <div class="ai-recommendation-box priority-${rec.priority.toLowerCase()}">
        <div class="recommendation-header">
          <div class="recommendation-icon">${rec.icon}</div>
          <div class="recommendation-title-section">
            <div class="recommendation-priority-badge ${rec.priority.toLowerCase()}">${rec.priority}</div>
          </div>
        </div>
        
        <div class="recommendation-title">${rec.title}</div>
        <div class="recommendation-description">${rec.description}</div>
        
        <div class="recommendation-metrics">
          <div class="recommendation-metric">
            <span class="recommendation-metric-value">€${rec.potentialSavings}</span>
            <span class="recommendation-metric-label">Potential Savings</span>
          </div>
          <div class="recommendation-metric">
            <span class="recommendation-metric-value">${rec.carbonReduction} kg</span>
            <span class="recommendation-metric-label">CO₂ Reduction</span>
          </div>
        </div>
        
        <div class="recommendation-details">
          <span>⏱️ ${rec.implementationTime}</span>
          <span>🔧 ${rec.difficulty}</span>
        </div>
        
        <div class="recommendation-actions">
          <button class="btn btn--outline btn--sm" onclick="learnMoreRecommendation(${rec.id})">Learn More</button>
        </div>
      </div>
    `).join('');
    
    console.log('AI recommendation boxes rendered successfully');
  } catch (error) {
    console.error('Error rendering AI recommendation boxes:', error);
  }
}

// AI Recommendation action handlers

function learnMoreRecommendation(recId) {
  const rec = appData.workload.aiRecommendations.find(r => r.id === recId);
  if (rec) {
    showToast(`Learn more about: ${rec.title}`);
  }
}

function updateTaskSummary() {
  const runningCount = document.getElementById('runningTasksCount');
  const queuedCount = document.getElementById('queuedTasksCount');
  
  if (runningCount && queuedCount) {
    const tasks = appData.workload.activeTasks;
    const running = tasks.filter(t => t.status === 'Running').length;
    const queued = tasks.filter(t => t.status === 'Queued').length;
    
    runningCount.textContent = running;
    queuedCount.textContent = queued;
  }
}

function renderReports() {
  updateSavingsProjection();
}

// User Profile System
function renderUserProfile() {
  console.log('Rendering user profile...');
  renderFeatureControls();
  renderGoalsSettings();
}

function renderFeatureControls() {
  const featureControlGrid = document.getElementById('featureControlGrid');
  if (!featureControlGrid) return;
  
  try {
    const features = appData.userProfile.featureAccess;
    
    featureControlGrid.innerHTML = Object.entries(features).map(([tabKey, tabConfig]) => {
      const tabName = tabKey.charAt(0).toUpperCase() + tabKey.slice(1).replace(/([A-Z])/g, ' $1');
      
      return `
        <div class="feature-control-item">
          <div class="feature-header">
            <h4 class="feature-title">${tabName}</h4>
            <div class="feature-toggle ${tabConfig.enabled ? 'active' : ''}" 
                 data-tab="${tabKey}" onclick="toggleFeature('${tabKey}')">
            </div>
          </div>
          <div class="section-controls">
            ${Object.entries(tabConfig.sections || {}).map(([sectionKey, enabled]) => `
              <div class="section-control">
                <span>${sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1).replace(/([A-Z])/g, ' $1')}</span>
                <div class="feature-toggle ${enabled ? 'active' : ''}" 
                     data-tab="${tabKey}" data-section="${sectionKey}" 
                     onclick="toggleSection('${tabKey}', '${sectionKey}')">
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');
  } catch (error) {
    console.error('Error rendering feature controls:', error);
  }
}

// CHANGE 3: Render Goals with Radio Buttons and Status Badges
function renderGoalsSettings() {
  const goalsGrid = document.getElementById('goalsGrid');
  if (!goalsGrid) {
    console.log('Goals grid not found');
    return;
  }
  
  try {
    console.log('Rendering goals with radio buttons and status badges...');
    const goals = appData.userProfile.goals;
    
    goalsGrid.innerHTML = Object.entries(goals).map(([goalKey, goal]) => {
      const goalName = goalKey.charAt(0).toUpperCase() + goalKey.slice(1).replace(/([A-Z])/g, ' $1');
      const progressPercentage = (goal.currentProgress / goal.target * 100).toFixed(1);
      
      // Determine status badge text and class
      let statusText = 'IN PROGRESS';
      let statusClass = 'in-progress';
      
      if (!goal.enabled) {
        statusText = 'CANCELLED';
        statusClass = 'cancelled';
      } else if (goal.status === 'achieved') {
        statusText = 'ACHIEVED';
        statusClass = 'achieved';
      }
      
      return `
        <div class="goal-item">
          <div class="goal-header">
            <div class="goal-radio-section">
              <div class="goal-radio ${goal.enabled ? 'active' : ''}" 
                   onclick="toggleGoalRadio('${goalKey}')"></div>
            </div>
            
            <div class="goal-title-section">
              <h4 class="goal-title">${goalName}</h4>
              <p class="goal-description">${goal.description}</p>
            </div>
            
            <div class="goal-status-section">
              <div class="goal-status-badge ${statusClass}">${statusText}</div>
            </div>
          </div>
          
          <div class="goal-progress-info">
            <span class="goal-target-info">Target: ${goal.target}${goal.unit.includes('percent') ? '%' : ''}</span>
            <span class="goal-current-info">Current: ${goal.currentProgress}${goal.unit.includes('percent') ? '%' : ''}</span>
          </div>
          
          <div class="goal-progress">
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${Math.min(progressPercentage, 100)}%"></div>
            </div>
          </div>
        </div>
      `;
    }).join('');
    
    console.log('Goals with radio buttons and status badges rendered successfully');
  } catch (error) {
    console.error('Error rendering goals settings:', error);
  }
}

// Goal radio button toggle
function toggleGoalRadio(goalKey) {
  const goal = appData.userProfile.goals[goalKey];
  if (goal) {
    goal.enabled = !goal.enabled;
    
    // Update status based on enabled state
    if (!goal.enabled) {
      goal.status = 'cancelled';
    } else if (goal.currentProgress >= goal.target) {
      goal.status = 'achieved';
    } else {
      goal.status = 'in_progress';
    }
    
    renderGoalsSettings();
    showToast(`${goalKey} goal ${goal.enabled ? 'enabled' : 'disabled'}`);
  }
}

// User Profile Functions
function toggleFeature(tabKey) {
  const feature = appData.userProfile.featureAccess[tabKey];
  if (feature) {
    feature.enabled = !feature.enabled;
    renderFeatureControls();
    showToast(`${tabKey} ${feature.enabled ? 'enabled' : 'disabled'}`);
  }
}

function toggleSection(tabKey, sectionKey) {
  const feature = appData.userProfile.featureAccess[tabKey];
  if (feature && feature.sections) {
    feature.sections[sectionKey] = !feature.sections[sectionKey];
    renderFeatureControls();
    showToast(`${sectionKey} ${feature.sections[sectionKey] ? 'enabled' : 'disabled'}`);
  }
}

function saveGoals() {
  showLoading();
  setTimeout(() => {
    hideLoading();
    showToast('Goals and settings saved successfully');
  }, 1000);
}

function resetGoals() {
  showLoading();
  setTimeout(() => {
    // Reset to default values
    Object.values(appData.userProfile.goals).forEach(goal => {
      goal.enabled = true;
    });
    
    renderGoalsSettings();
    hideLoading();
    showToast('Goals reset to default values');
  }, 800);
}
// Enhanced Switch Provider Modal with proper radio button functionality
function showSwitchProviderModal() {
  const modal = document.getElementById('switchProviderModal');
  const modalBody = document.getElementById('switchProviderModalBody');
  
  if (modal && modalBody) {
    console.log('Showing switch provider modal');
    const providers = appData.availableProviders.filter(p => !p.isCurrent);
    
    modalBody.innerHTML = `
      <div class="provider-selection">
        <p>Select a new energy provider. Only one provider can be active at a time.</p>
        <div class="provider-cards" id="providerCards">
          ${providers.map(provider => `
            <div class="provider-card" data-provider-id="${provider.id}">
              <div class="provider-header">
                <div class="provider-radio" data-provider-id="${provider.id}"></div>
                <div class="provider-logo">${provider.logo}</div>
                <div class="provider-info">
                  <h4>${provider.name}</h4>
                  <p class="provider-type">${provider.type} • ${provider.country}</p>
                </div>
              </div>
              
              <div class="provider-metrics">
                <div class="provider-metric">
                  <span class="provider-metric-value">€${provider.rate}</span>
                  <span class="provider-metric-label">per kWh</span>
                </div>
                <div class="provider-metric">
                  <span class="provider-metric-value">${provider.renewablePercentage}%</span>
                  <span class="provider-metric-label">Renewable</span>
                </div>
                <div class="provider-metric">
                  <span class="provider-metric-value">${provider.reliability}%</span>
                  <span class="provider-metric-label">Reliability</span>
                </div>
              </div>
              
              <div class="provider-benefits">
                ${provider.benefits.map(benefit => `
                  <span class="benefit-tag">${benefit}</span>
                `).join('')}
              </div>
              
              <div class="provider-savings">
                <strong>Monthly Cost: €${provider.monthlyCost.toLocaleString()}</strong>
                <span class="savings-indicator ${provider.annualSavings > 0 ? 'positive' : 'negative'}">
                  Annual ${provider.annualSavings > 0 ? 'Savings' : 'Cost'}: €${Math.abs(provider.annualSavings).toLocaleString()}
                </span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="modal-actions">
        <button class="btn btn--primary" id="confirmSwitchBtn" onclick="confirmProviderSwitch()" disabled>
          Switch Provider
        </button>
        <button class="btn btn--secondary" onclick="closeModal('switchProviderModal')">Cancel</button>
      </div>
    `;
    
    // Add click handlers for provider selection
    setTimeout(() => {
      const providerCards = document.querySelectorAll('.provider-card');
      providerCards.forEach(card => {
        card.addEventListener('click', function() {
          const providerId = parseInt(this.dataset.providerId);
          selectProvider(providerId);
        });
      });
    }, 100);
    
    modal.classList.remove('hidden');
    selectedProviderId = null;
    showToast('Provider switching options loaded');
  }
}

function selectProvider(providerId) {
  console.log('Selecting provider:', providerId);
  selectedProviderId = providerId;
  
  // Update visual selection
  document.querySelectorAll('.provider-card').forEach(card => {
    card.classList.remove('selected');
    if (parseInt(card.dataset.providerId) === providerId) {
      card.classList.add('selected');
    }
  });
  
  // Enable switch button
  const confirmBtn = document.getElementById('confirmSwitchBtn');
  if (confirmBtn) {
    confirmBtn.disabled = false;
  }
  
  showToast(`Selected ${appData.availableProviders.find(p => p.id === providerId)?.name}`);
}

function confirmProviderSwitch() {
  if (!selectedProviderId) return;
  
  console.log('Confirming provider switch to:', selectedProviderId);
  showLoading();
  
  setTimeout(() => {
    // Update provider data
    appData.availableProviders.forEach(provider => {
      provider.isCurrent = provider.id === selectedProviderId;
    });
    
    renderContracts();
    hideLoading();
    closeModal('switchProviderModal');
    showToast('Energy provider switched successfully');
  }, 2000);
}

// Enhanced Weather Modal with interactive dashboard
function showWeatherModal() {
  const modal = document.getElementById('weatherModal');
  const modalBody = document.getElementById('weatherModalBody');
  
  if (modal && modalBody) {
    console.log('Showing weather modal');
    const weather = appData.weatherData;
    
    modalBody.innerHTML = `
      <div class="weather-dashboard">
        <div class="weather-current">
          <h4>Current Weather Impact</h4>
          <div class="current-weather-display">
            <div class="weather-icon" style="font-size: 3rem;">${weather.current.icon}</div>
            <div class="weather-details">
              <h3>${weather.current.location}</h3>
              <p>${weather.current.temperature}°C • ${weather.current.condition}</p>
              <div class="weather-metrics">
                <div><strong>Humidity:</strong> ${weather.current.humidity}%</div>
                <div><strong>Wind Speed:</strong> ${weather.current.windSpeed} m/s</div>
                <div><strong>Solar Irradiance:</strong> ${weather.current.solarIrradiance} W/m²</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="weather-forecast">
          <h4>4-Day Energy Forecast</h4>
          <div class="forecast-list">
            ${weather.forecast.map(day => `
              <div class="forecast-day">
                <div class="forecast-day-name"><strong>${day.day}</strong></div>
                <div class="forecast-icon" style="font-size: 1.5rem;">${day.icon}</div>
                <div class="forecast-temps">${day.tempHigh}°/${day.tempLow}°C</div>
                <div class="forecast-potentials">
                  <div>☀️ Solar: ${day.solarPotential}%</div>
                  <div>💨 Wind: ${day.windPotential}%</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
      
      <div class="energy-impact-section">
        <h4>Real-Time Energy Production Impact</h4>
        <div class="impact-metrics">
          <div class="impact-metric">
            <span class="impact-label">Current Solar Output</span>
            <span class="impact-value">${weather.energyImpact.currentSolarOutput} kW</span>
          </div>
          <div class="impact-metric">
            <span class="impact-label">Forecast Solar Output</span>
            <span class="impact-value">${weather.energyImpact.forecastSolarOutput} kW</span>
          </div>
          <div class="impact-metric">
            <span class="impact-label">Current Wind Output</span>
            <span class="impact-value">${weather.energyImpact.currentWindOutput} kW</span>
          </div>
          <div class="impact-metric">
            <span class="impact-label">Forecast Wind Output</span>
            <span class="impact-value">${weather.energyImpact.forecastWindOutput} kW</span>
          </div>
        </div>
      </div>
      
      <div class="optimization-recommendations">
        <h4>Weather-Based Optimization Opportunities</h4>
        <div class="optimization-list">
          ${weather.energyImpact.optimizationOpportunities.map(opportunity => `
            <div class="optimization-item">
              <div class="optimization-icon">🎯</div>
              <div class="optimization-text">${opportunity}</div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="modal-actions">
        <button class="btn btn--primary" onclick="enableWeatherOptimization()">
          Enable Auto-Optimization
        </button>
        <button class="btn btn--secondary" onclick="closeModal('weatherModal')">Close</button>
      </div>
    `;
    
    modal.classList.remove('hidden');
    showToast('Interactive weather dashboard loaded');
  }
}

function enableWeatherOptimization() {
  console.log('Enabling weather optimization');
  showLoading();
  setTimeout(() => {
    hideLoading();
    closeModal('weatherModal');
    showToast('Weather-based optimization enabled successfully');
  }, 1500);
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    console.log('Closed modal:', modalId);
  }
}

// Notification panel
function toggleNotificationPanel() {
  const panel = document.getElementById('notificationPanel');
  if (panel) {
    panel.classList.toggle('open');
  }
}

function setupNotifications() {
  const notificationBell = document.getElementById('notificationBell');
  const notificationList = document.getElementById('notificationList');
  const closeNotifications = document.getElementById('closeNotifications');
  
  if (notificationBell) {
    notificationBell.addEventListener('click', () => {
      toggleNotificationPanel();
      renderNotifications();
    });
  }
  
  if (closeNotifications) {
    closeNotifications.addEventListener('click', () => {
      toggleNotificationPanel();
    });
  }
  
  // Initialize notifications count
  updateNotificationCount();
}

function renderNotifications() {
  const notificationList = document.getElementById('notificationList');
  if (!notificationList) return;
  
  // Sample notifications - in real app this would come from API
  const notifications = [
    {
      id: 1,
      type: 'info',
      title: 'Price Alert',
      message: 'ERSE market prices have increased by 2.3%',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'warning',
      title: 'Temperature Warning',
      message: 'Server Room B temperature is above optimal range',
      time: '4 hours ago'
    },
    {
      id: 3,
      type: 'success',
      title: 'Battery Charged',
      message: 'Main Storage Bank reached 80% capacity',
      time: '1 day ago'
    }
  ];
  
  if (notifications.length === 0) {
    notificationList.innerHTML = '<div class="no-notifications">No new notifications</div>';
    return;
  }
  
  notificationList.innerHTML = notifications.map(notif => `
    <div class="notification-item ${notif.type}">
      <div class="notification-icon">${notif.type === 'info' ? 'ℹ️' : notif.type === 'warning' ? '⚠️' : '✅'}</div>
      <div class="notification-content">
        <div class="notification-title">${notif.title}</div>
        <div class="notification-message">${notif.message}</div>
        <div class="notification-time">${notif.time}</div>
      </div>
    </div>
  `).join('');
}

function updateNotificationCount() {
  const notificationCount = document.querySelector('.notification-count');
  if (notificationCount) {
    // In real app, get count from API
    notificationCount.textContent = '0';
    if (parseInt(notificationCount.textContent) === 0) {
      notificationCount.style.display = 'none';
    } else {
      notificationCount.style.display = 'flex';
    }
  }
}

// Data refresh
function refreshData() {
  showLoading();
  
  setTimeout(() => {
    try {
      const currentData = appData.timeBasedData[currentTimeView];
      const variation = 0.05;
      
      currentData.consumption += (Math.random() - 0.5) * currentData.consumption * variation;
      currentData.cost += (Math.random() - 0.5) * currentData.cost * variation;
      currentData.emissions += (Math.random() - 0.5) * currentData.emissions * variation;
      currentData.production += (Math.random() - 0.5) * currentData.production * variation;
      
      appData.realTimeData.lastUpdate = new Date().toISOString();
      
      updateKPICards();
      updateCharts();
      hideLoading();
      showToast('Data refreshed successfully');
    } catch (error) {
      console.error('Error refreshing data:', error);
      hideLoading();
      showToast('Error refreshing data');
    }
  }, 1500);
}

function autoRefreshData() {
  console.log('Auto-refreshing data...');
  refreshData();
}

// Report generation
function generateReport() {
  try {
    const reportType = document.getElementById('reportType')?.value;
    const format = document.getElementById('exportFormat')?.value;
    
    if (!reportType || !format) {
      showToast('Please fill in all report parameters');
      return;
    }
    
    showLoading();
    
    setTimeout(() => {
      hideLoading();
      showToast(`${reportType} report generated in ${format.toUpperCase()} format`);
    }, 2500);
  } catch (error) {
    console.error('Error generating report:', error);
    showToast('Error generating report');
  }
}

// Loading and toast utilities
function showLoading() {
  const overlay = document.getElementById('loadingOverlay');
  if (overlay) {
    overlay.classList.add('show');
  }
}

function hideLoading() {
  const overlay = document.getElementById('loadingOverlay');
  if (overlay) {
    overlay.classList.remove('show');
  }
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--color-surface);
    color: var(--color-text);
    padding: 16px 24px;
    border-radius: 12px;
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow-lg);
    z-index: 9999;
    opacity: 0;
    transition: all 0.3s ease;
    font-weight: 500;
    max-width: 90%;
    text-align: center;
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(-8px)';
  }, 100);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(8px)';
    setTimeout(() => {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast);
      }
    }, 300);
  }, 3500);
}

// Temperature Monitoring Functions
function renderTemperatureMonitoring() {
  renderTemperatureSensors();
  renderTemperatureHistoryChart();
  renderCoolingRecommendations();
}

function renderTemperatureSensors() {
  const sensorsGrid = document.getElementById('temperatureSensorsGrid');
  if (!sensorsGrid) return;
  
  try {
    const sensors = appData.sensorMonitoring.temperatureSensors;
    
    sensorsGrid.innerHTML = sensors.map(sensor => {
      const statusClass = sensor.status === 'optimal' ? 'optimal' : 
                          sensor.status === 'warning' ? 'warning' : 'critical';
      const statusIcon = sensor.status === 'optimal' ? '✅' : 
                         sensor.status === 'warning' ? '⚠️' : '🔴';
      
      return `
        <div class="temperature-sensor-card status-${statusClass}">
          <div class="sensor-header">
            <div class="sensor-icon">🌡️</div>
            <div class="sensor-info">
              <h4>${sensor.location}</h4>
              <div class="sensor-status ${statusClass}">
                ${statusIcon} ${sensor.status.toUpperCase()}
              </div>
            </div>
          </div>
          <div class="sensor-metrics">
            <div class="sensor-metric">
              <span class="sensor-label">Current Temperature</span>
              <span class="sensor-value">${sensor.currentTemp}°C</span>
            </div>
            <div class="sensor-metric">
              <span class="sensor-label">Optimal Range</span>
              <span class="sensor-value">${sensor.optimalRange[0]}°C - ${sensor.optimalRange[1]}°C</span>
            </div>
            <div class="sensor-metric">
              <span class="sensor-label">Last Update</span>
              <span class="sensor-value">${new Date(sensor.lastUpdate).toLocaleTimeString()}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  } catch (error) {
    console.error('Error rendering temperature sensors:', error);
  }
}

function renderTemperatureHistoryChart() {
  const ctx = document.getElementById('temperatureHistoryChart');
  if (!ctx) return;
  
  try {
    const historyData = appData.sensorMonitoring.historicalData.temperature['24hours'];
    
    if (charts.temperatureHistory) {
      charts.temperatureHistory.destroy();
    }
    
    charts.temperatureHistory = new Chart(ctx.getContext('2d'), {
      type: 'line',
      data: {
        labels: historyData.map(d => d.time),
        datasets: [{
          label: 'Average Temperature (°C)',
          data: historyData.map(d => d.avgTemp),
          borderColor: 'rgba(239, 68, 68, 1)',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          tension: 0.4,
          fill: true
        }, {
          label: 'Energy Consumption (kW)',
          data: historyData.map(d => d.energyConsumption / 100),
          borderColor: 'rgba(59, 130, 246, 1)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          tension: 0.4,
          yAxisID: 'y1',
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          mode: 'index'
        },
        plugins: {
          legend: {
            position: 'top'
          }
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            title: {
              display: true,
              text: 'Temperature (°C)'
            }
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            title: {
              display: true,
              text: 'Energy Consumption (100 kW)'
            },
            grid: {
              drawOnChartArea: false
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error rendering temperature history chart:', error);
  }
}

function renderCoolingRecommendations() {
  const recommendationsGrid = document.getElementById('coolingRecommendationsGrid');
  if (!recommendationsGrid) return;
  
  try {
    const recommendations = appData.sensorMonitoring.coolingSystemRecommendations;
    
    recommendationsGrid.innerHTML = recommendations.map(rec => {
      const priorityClass = rec.priority === 'high' ? 'high' : 'medium';
      
      return `
        <div class="cooling-recommendation-card priority-${priorityClass}">
          <div class="recommendation-header">
            <div class="recommendation-icon">❄️</div>
            <div class="recommendation-title-section">
              <div class="recommendation-priority-badge ${priorityClass}">${rec.priority.toUpperCase()}</div>
              <h4>${rec.title}</h4>
            </div>
          </div>
          <div class="recommendation-description">
            <p>${rec.description}</p>
          </div>
          <div class="recommendation-details">
            <div class="recommendation-detail">
              <span class="detail-label">Current System:</span>
              <span class="detail-value">${rec.currentSystem}</span>
            </div>
            <div class="recommendation-detail">
              <span class="detail-label">Recommended System:</span>
              <span class="detail-value">${rec.recommendedSystem}</span>
            </div>
            <div class="recommendation-detail">
              <span class="detail-label">Energy Savings:</span>
              <span class="detail-value">${rec.energySavings} kW</span>
            </div>
            <div class="recommendation-detail">
              <span class="detail-label">Cost Savings:</span>
              <span class="detail-value">€${rec.costSavings}/month</span>
            </div>
            <div class="recommendation-detail">
              <span class="detail-label">Implementation Time:</span>
              <span class="detail-value">${rec.implementationTime}</span>
            </div>
          </div>
          <div class="recommendation-actions">
            <button class="btn btn--outline btn--sm">Learn More</button>
          </div>
        </div>
      `;
    }).join('');
  } catch (error) {
    console.error('Error rendering cooling recommendations:', error);
  }
}

// Battery & PV Functions
function renderBatteryAndPV() {
  renderBatterySystems();
  renderPVRecommendations();
  renderBatteryRecommendations();
}

function renderBatterySystems() {
  const batteryGrid = document.getElementById('batterySystemsGrid');
  if (!batteryGrid) return;
  
  try {
    const batteries = appData.batteryManagement.batterySystems;
    
    batteryGrid.innerHTML = batteries.map(battery => `
      <div class="battery-system-card">
        <div class="battery-header">
          <div class="battery-icon">🔋</div>
          <div class="battery-info">
            <h4>${battery.name}</h4>
            <div class="battery-status ${battery.status}">${battery.status.toUpperCase()}</div>
          </div>
        </div>
        <div class="battery-metrics">
          <div class="battery-metric">
            <span class="battery-label">Capacity</span>
            <span class="battery-value">${battery.capacity} kW</span>
          </div>
          <div class="battery-metric">
            <span class="battery-label">Current Charge</span>
            <span class="battery-value">${battery.currentCharge} kW</span>
          </div>
          <div class="battery-metric">
            <span class="battery-label">Charge Level</span>
            <span class="battery-value">${battery.chargeLevel}%</span>
          </div>
          <div class="battery-metric">
            <span class="battery-label">Optimization Mode</span>
            <span class="battery-value">${battery.optimizationMode.replace('_', ' ').toUpperCase()}</span>
          </div>
        </div>
        <div class="battery-progress">
          <div class="progress-bar">
            <div class="progress-fill battery-fill" style="width: ${battery.chargeLevel}%"></div>
          </div>
          <span class="progress-text">${battery.chargeLevel}% charged</span>
        </div>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error rendering battery systems:', error);
  }
}

function renderPVRecommendations() {
  const pvContent = document.getElementById('pvRecommendationsContent');
  if (!pvContent) return;
  
  try {
    const current = appData.batteryManagement.solarPanelRecommendations.currentInstallation;
    const recommended = appData.batteryManagement.solarPanelRecommendations.recommendedExpansion;
    
    pvContent.innerHTML = `
      <div class="pv-recommendation-section">
        <div class="pv-current">
          <h4>Current Installation</h4>
          <div class="pv-metrics">
            <div class="pv-metric">
              <span class="pv-label">Capacity:</span>
              <span class="pv-value">${current.capacity} kW</span>
            </div>
            <div class="pv-metric">
              <span class="pv-label">Efficiency:</span>
              <span class="pv-value">${current.efficiency}%</span>
            </div>
            <div class="pv-metric">
              <span class="pv-label">Annual Production:</span>
              <span class="pv-value">${current.annualProduction.toLocaleString()} kWh</span>
            </div>
          </div>
        </div>
        <div class="pv-recommended">
          <h4>Recommended Expansion</h4>
          <div class="pv-recommendation-details">
            <div class="pv-detail">
              <span class="pv-label">Additional Capacity:</span>
              <span class="pv-value">${recommended.additionalCapacity} kW</span>
            </div>
            <div class="pv-detail">
              <span class="pv-label">Estimated Cost:</span>
              <span class="pv-value">€${recommended.estimatedCost.toLocaleString()}</span>
            </div>
            <div class="pv-detail">
              <span class="pv-label">Estimated ROI:</span>
              <span class="pv-value">${recommended.estimatedROI}%</span>
            </div>
            <div class="pv-detail">
              <span class="pv-label">Payback Period:</span>
              <span class="pv-value">${recommended.paybackPeriod} years</span>
            </div>
            <div class="pv-detail">
              <span class="pv-label">Additional Annual Production:</span>
              <span class="pv-value">${recommended.additionalAnnualProduction.toLocaleString()} kWh</span>
            </div>
            <div class="pv-detail">
              <span class="pv-label">Annual Savings:</span>
              <span class="pv-value highlight">€${recommended.annualSavings.toLocaleString()}</span>
            </div>
            <div class="pv-detail">
              <span class="pv-label">CO₂ Reduction:</span>
              <span class="pv-value highlight">${recommended.carbonReduction.toLocaleString()} kg/year</span>
            </div>
          </div>
          <button class="btn btn--primary">Request Quote</button>
        </div>
      </div>
    `;
  } catch (error) {
    console.error('Error rendering PV recommendations:', error);
  }
}

function renderBatteryRecommendations() {
  const batteryRecGrid = document.getElementById('batteryRecommendationsGrid');
  if (!batteryRecGrid) return;
  
  try {
    const recommendations = appData.batteryManagement.optimizationRecommendations;
    
    batteryRecGrid.innerHTML = recommendations.map(rec => {
      const priorityClass = rec.priority === 'high' ? 'high' : 'medium';
      
      return `
        <div class="battery-recommendation-card priority-${priorityClass}">
          <div class="recommendation-header">
            <div class="recommendation-icon">🔋</div>
            <h4>${rec.title}</h4>
            <div class="recommendation-priority-badge ${priorityClass}">${rec.priority.toUpperCase()}</div>
          </div>
          <div class="recommendation-description">
            <p>${rec.description}</p>
          </div>
          <div class="recommendation-metrics">
            <div class="recommendation-metric">
              <span class="metric-label">Potential Savings:</span>
              <span class="metric-value">€${rec.potentialSavings}</span>
            </div>
            <div class="recommendation-metric">
              <span class="metric-label">CO₂ Reduction:</span>
              <span class="metric-value">${rec.carbonReduction} kg</span>
            </div>
            <div class="recommendation-metric">
              <span class="metric-label">Implementation Time:</span>
              <span class="metric-value">${rec.implementationTime}</span>
            </div>
          </div>
          <div class="recommendation-actions">
            <button class="btn btn--outline btn--sm">Details</button>
          </div>
        </div>
      `;
    }).join('');
  } catch (error) {
    console.error('Error rendering battery recommendations:', error);
  }
}

// ERSE Data Functions - Now integrated into Contracts tab
function renderERSEPrices() {
  const pricesGrid = document.getElementById('ersePricesGrid');
  const erseLastUpdate = document.getElementById('erseLastUpdate');
  
  if (!pricesGrid) return;
  
  try {
    const erseData = appData.erseData;
    const prices = erseData.marketPrices;
    
    if (erseLastUpdate) {
      erseLastUpdate.textContent = new Date(erseData.lastUpdate).toLocaleString();
    }
    
    pricesGrid.innerHTML = `
      <div class="erse-price-card">
        <div class="erse-price-header">
          <h4>Portugal</h4>
        </div>
        <div class="erse-price-metrics">
          <div class="erse-price-metric">
            <span class="price-label">Current:</span>
            <span class="price-value">€${prices.portugal.current.toFixed(3)}/kWh</span>
          </div>
          <div class="erse-price-metric">
            <span class="price-label">Daily Avg:</span>
            <span class="price-value">€${prices.portugal.avgDaily.toFixed(3)}/kWh</span>
          </div>
          <div class="erse-price-metric">
            <span class="price-label">Monthly Avg:</span>
            <span class="price-value">€${prices.portugal.avgMonthly.toFixed(3)}/kWh</span>
          </div>
          <div class="erse-price-metric">
            <span class="price-label">Trend:</span>
            <span class="price-value ${prices.portugal.trend.startsWith('+') ? 'positive' : 'negative'}">${prices.portugal.trend}</span>
          </div>
        </div>
      </div>
      <div class="erse-price-card">
        <div class="erse-price-header">
          <h4>Spain</h4>
        </div>
        <div class="erse-price-metrics">
          <div class="erse-price-metric">
            <span class="price-label">Current:</span>
            <span class="price-value">€${prices.spain.current.toFixed(3)}/kWh</span>
          </div>
          <div class="erse-price-metric">
            <span class="price-label">Daily Avg:</span>
            <span class="price-value">€${prices.spain.avgDaily.toFixed(3)}/kWh</span>
          </div>
          <div class="erse-price-metric">
            <span class="price-label">Monthly Avg:</span>
            <span class="price-value">€${prices.spain.avgMonthly.toFixed(3)}/kWh</span>
          </div>
          <div class="erse-price-metric">
            <span class="price-label">Trend:</span>
            <span class="price-value ${prices.spain.trend.startsWith('+') ? 'positive' : 'negative'}">${prices.spain.trend}</span>
          </div>
        </div>
      </div>
    `;
  } catch (error) {
    console.error('Error rendering ERSE prices:', error);
  }
}

function renderPersonalizedAnalysis() {
  const analysisContent = document.getElementById('personalizedAnalysisContent');
  if (!analysisContent) return;
  
  try {
    const analysis = appData.erseData.personalizedAnalysis;
    
    analysisContent.innerHTML = `
      <div class="personalized-analysis-section">
        <div class="analysis-summary">
          <div class="analysis-metric">
            <span class="metric-label">Savings Opportunity:</span>
            <span class="metric-value highlight">€${analysis.savingsOpportunity.toLocaleString()}/month</span>
          </div>
          <div class="analysis-metric">
            <span class="metric-label">CO₂ Reduction Potential:</span>
            <span class="metric-value highlight">${analysis.carbonReductionPotential} kg/month</span>
          </div>
        </div>
        <div class="analysis-recommendations">
          <h4>Recommended Actions:</h4>
          <ul class="recommendations-list">
            ${analysis.recommendedActions.map(action => `<li>${action}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  } catch (error) {
    console.error('Error rendering personalized analysis:', error);
  }
}


// Custom Graphs Functions
function renderCustomGraphs() {
  renderCustomGraphsBuilder();
  renderSavedCustomGraphs();
}

function renderCustomGraphsBuilder() {
  const builder = document.getElementById('customGraphsBuilder');
  if (!builder) return;
  
  try {
    builder.innerHTML = `
      <div class="custom-graphs-form">
        <div class="form-group">
          <label class="form-label">Graph Name</label>
          <input type="text" class="form-control" id="customGraphName" placeholder="e.g., Energy vs Temperature">
        </div>
        <div class="form-group">
          <label class="form-label">Chart Type</label>
          <select class="form-control" id="customGraphType">
            <option value="line">Line Chart</option>
            <option value="bar">Bar Chart</option>
            <option value="pie">Pie Chart</option>
            <option value="area">Area Chart</option>
            <option value="scatter">Scatter Plot</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Data Source</label>
          <select class="form-control" id="customGraphDataSource">
            <option value="sensorMonitoring.historicalData.temperature">Temperature & Energy</option>
            <option value="timeBasedData">Time-based Data</option>
            <option value="co2Emissions">CO2 Emissions</option>
            <option value="batteryManagement">Battery Management</option>
          </select>
        </div>
        <button class="btn btn--primary" id="createCustomGraph">Create Graph</button>
      </div>
    `;
    
    const createBtn = document.getElementById('createCustomGraph');
    if (createBtn) {
      createBtn.addEventListener('click', createCustomGraph);
    }
  } catch (error) {
    console.error('Error rendering custom graphs builder:', error);
  }
}

function renderSavedCustomGraphs() {
  const saved = document.getElementById('customGraphsSaved');
  if (!saved) return;
  
  try {
    const savedGraphs = appData.customGraphs.savedGraphs;
    
    saved.innerHTML = `
      <div class="saved-graphs-header">
        <h4>Saved Custom Graphs</h4>
      </div>
      <div class="saved-graphs-grid">
        ${savedGraphs.map(graph => `
          <div class="saved-graph-card">
            <div class="graph-header">
              <h5>${graph.name}</h5>
              <div class="graph-type-badge">${graph.type}</div>
            </div>
            <div class="graph-details">
              <div class="graph-detail">
                <span class="detail-label">Data Source:</span>
                <span class="detail-value">${graph.dataSource}</span>
              </div>
            </div>
            <div class="graph-actions">
              <button class="btn btn--primary btn--sm" onclick="viewCustomGraph('${graph.id}')">View</button>
              <button class="btn btn--outline btn--sm">Edit</button>
              <button class="btn btn--secondary btn--sm">Delete</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } catch (error) {
    console.error('Error rendering saved custom graphs:', error);
  }
}

function viewCustomGraph(graphId) {
  // Determine which tab contains the graph based on data source
  const graph = appData.customGraphs.savedGraphs.find(g => g.id === graphId);
  if (!graph) return;
  
  let targetTab = 'dashboard';
  
  // Map data sources to tabs
  if (graph.dataSource.includes('temperatureMonitoring')) {
    targetTab = 'temperature';
  } else if (graph.dataSource.includes('co2Emissions')) {
    targetTab = 'sustainability';
  } else if (graph.dataSource.includes('batteryManagement')) {
    targetTab = 'battery-pv';
  } else if (graph.dataSource.includes('timeBasedData')) {
    targetTab = 'dashboard';
  }
  
  // Switch to the appropriate tab
  switchTab(targetTab);
  showToast(`Viewing graph: ${graph.name}`);
}

function createCustomGraph() {
  const name = document.getElementById('customGraphName')?.value;
  const type = document.getElementById('customGraphType')?.value;
  const dataSource = document.getElementById('customGraphDataSource')?.value;
  
  if (!name || !type || !dataSource) {
    showToast('Please fill in all fields');
    return;
  }
  
  showLoading();
  setTimeout(() => {
    showToast(`Custom graph "${name}" created successfully`);
    renderSavedCustomGraphs();
    hideLoading();
  }, 1500);
}

// Thresholds Configuration Functions
function renderThresholdsConfig() {
  const thresholdsForm = document.getElementById('thresholdsForm');
  if (!thresholdsForm) return;
  
  try {
    const thresholds = appData.consumptionThresholds.currentSettings;
    const matching = appData.consumptionThresholds.matchingCriteria;
    
    thresholdsForm.innerHTML = `
      <div class="thresholds-form-grid">
        <div class="form-section">
          <h4>Consumption Thresholds</h4>
          <div class="form-group">
            <label class="form-label">Min Consumption (kW)</label>
            <input type="number" class="form-control" id="minConsumption" value="${thresholds.minConsumption}">
          </div>
          <div class="form-group">
            <label class="form-label">Max Consumption (kW)</label>
            <input type="number" class="form-control" id="maxConsumption" value="${thresholds.maxConsumption}">
          </div>
          <div class="form-group">
            <label class="form-label">Alert Threshold (kW)</label>
            <input type="number" class="form-control" id="alertThreshold" value="${thresholds.alertThreshold}">
          </div>
          <div class="form-group">
            <label class="form-label">Critical Threshold (kW)</label>
            <input type="number" class="form-control" id="criticalThreshold" value="${thresholds.criticalThreshold}">
          </div>
        </div>
        <div class="form-section">
          <h4>Provider Matching Criteria</h4>
          <div class="form-group">
            <label class="form-label">Min MW</label>
            <input type="number" class="form-control" id="minMW" value="${matching.minMW}">
          </div>
          <div class="form-group">
            <label class="form-label">Max MW</label>
            <input type="number" class="form-control" id="maxMW" value="${matching.maxMW}">
          </div>
          <div class="form-group">
            <label class="form-label">Preferred Renewable %</label>
            <input type="number" class="form-control" id="preferredRenewable" min="0" max="100" value="${matching.preferredRenewable}">
          </div>
          <div class="form-group">
            <label class="form-label">Max Price per kWh (€)</label>
            <input type="number" step="0.001" class="form-control" id="maxPricePerKWh" value="${matching.maxPricePerKWh}">
          </div>
          <div class="form-group">
            <label class="form-label">Required Reliability (%)</label>
            <input type="number" class="form-control" id="requiredReliability" min="0" max="100" value="${matching.requiredReliability}">
          </div>
        </div>
      </div>
    `;
  } catch (error) {
    console.error('Error rendering thresholds config:', error);
  }
}

function saveThresholdsConfig() {
  showLoading();
  setTimeout(() => {
    const thresholds = {
      minConsumption: parseInt(document.getElementById('minConsumption')?.value || '2000'),
      maxConsumption: parseInt(document.getElementById('maxConsumption')?.value || '4000'),
      alertThreshold: parseInt(document.getElementById('alertThreshold')?.value || '3500'),
      criticalThreshold: parseInt(document.getElementById('criticalThreshold')?.value || '3800')
    };
    
    const matching = {
      minMW: parseInt(document.getElementById('minMW')?.value || '1'),
      maxMW: parseInt(document.getElementById('maxMW')?.value || '10'),
      preferredRenewable: parseInt(document.getElementById('preferredRenewable')?.value || '70'),
      maxPricePerKWh: parseFloat(document.getElementById('maxPricePerKWh')?.value || '0.090'),
      requiredReliability: parseInt(document.getElementById('requiredReliability')?.value || '95')
    };
    
    appData.consumptionThresholds.currentSettings = thresholds;
    appData.consumptionThresholds.matchingCriteria = matching;
    
    hideLoading();
    showToast('Thresholds configuration saved successfully');
  }, 1000);
}

function resetThresholdsConfig() {
  showLoading();
  setTimeout(() => {
    renderThresholdsConfig();
    hideLoading();
    showToast('Thresholds reset to default values');
  }, 800);
}

// Data Center Context Indicator
function renderDataCenterContext() {
  const contextDiv = document.getElementById('dataCenterContext');
  if (!contextDiv) return;
  
  try {
    const currentSite = appData.dataCenterContext.currentSite;
    contextDiv.innerHTML = `
      <div class="data-center-badge">
        <span class="site-name">${currentSite.name}</span>
        <span class="subdivision-name">${currentSite.subdivision.name}</span>
      </div>
    `;
  } catch (error) {
    console.error('Error rendering data center context:', error);
  }
}

// Granular Consumption Monitoring
function renderGranularMonitoring() {
  const zonesGrid = document.getElementById('zonesGrid');
  if (!zonesGrid) return;
  
  try {
    const zones = appData.granularConsumption.zones;
    
    zonesGrid.innerHTML = zones.map(zone => `
      <div class="zone-card" data-zone-id="${zone.id}">
        <div class="zone-header">
          <h3>${zone.name}</h3>
          <span class="zone-type">${zone.type.replace('_', ' ')}</span>
        </div>
        <div class="zone-metrics">
          <div class="zone-metric">
            <span class="metric-label">Total Consumption</span>
            <span class="metric-value">${zone.totalConsumption} kW</span>
          </div>
          <div class="zone-metric">
            <span class="metric-label">Machines</span>
            <span class="metric-value">${zone.machines.length}</span>
          </div>
          <div class="zone-metric">
            <span class="metric-label">Groups</span>
            <span class="metric-value">${zone.groups.length}</span>
          </div>
        </div>
        <div class="zone-actions">
          <button class="btn btn--outline btn--sm" onclick="showZoneDetails('${zone.id}')">
            <span>View Details</span>
          </button>
        </div>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error rendering granular monitoring:', error);
  }
}

function showZoneDetails(zoneId) {
  const zone = appData.granularConsumption.zones.find(z => z.id === zoneId);
  if (!zone) return;
  
  const detailsCard = document.getElementById('granularDetailsCard');
  if (!detailsCard) return;
  
  detailsCard.classList.remove('hidden');
  detailsCard.innerHTML = `
    <div class="details-header">
      <h3>${zone.name} - Detailed Breakdown</h3>
      <button class="btn-close" onclick="document.getElementById('granularDetailsCard').classList.add('hidden')">×</button>
    </div>
    <div class="details-content">
      <div class="machines-section">
        <h4>Machines & Outlets</h4>
        ${zone.machines.map(machine => `
          <div class="machine-card">
            <div class="machine-header">
              <h5>${machine.name}</h5>
              <span class="machine-consumption">${machine.consumption} kW</span>
            </div>
            <div class="outlets-list">
              ${machine.outlets.map(outlet => `
                <div class="outlet-item">
                  <span>${outlet.name}</span>
                  <span>${outlet.consumption} kW</span>
                  <span class="status-badge status-${outlet.status}">${outlet.status}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      <div class="groups-section">
        <h4>Groups</h4>
        ${zone.groups.map(group => `
          <div class="group-card">
            <h5>${group.name}</h5>
            <span>${group.consumption} kW</span>
            <span class="group-type">${group.type}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Humidity and Leak Detection Sensors
function renderHumiditySensors() {
  const sensorsGrid = document.getElementById('humiditySensorsGrid');
  if (!sensorsGrid) return;
  
  try {
    const sensors = appData.sensorMonitoring.humiditySensors;
    
    sensorsGrid.innerHTML = sensors.map(sensor => {
      const statusClass = sensor.status === 'optimal' ? 'optimal' : 
                          sensor.status === 'warning' ? 'warning' : 'critical';
      const statusIcon = sensor.status === 'optimal' ? '✅' : 
                         sensor.status === 'warning' ? '⚠️' : '🔴';
      
      return `
        <div class="temperature-sensor-card status-${statusClass}">
          <div class="sensor-header">
            <div class="sensor-icon">💧</div>
            <div class="sensor-info">
              <h4>${sensor.location}</h4>
              <span class="sensor-status ${statusClass}">${statusIcon} ${sensor.status}</span>
            </div>
          </div>
          <div class="sensor-metrics">
            <div class="sensor-metric">
              <span class="sensor-label">Current Humidity</span>
              <span class="sensor-value">${sensor.currentHumidity}%</span>
            </div>
            <div class="sensor-metric">
              <span class="sensor-label">Optimal Range</span>
              <span class="sensor-value">${sensor.optimalRange[0]}% - ${sensor.optimalRange[1]}%</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  } catch (error) {
    console.error('Error rendering humidity sensors:', error);
  }
}

function renderLeakDetectionSensors() {
  const sensorsGrid = document.getElementById('leakSensorsGrid');
  if (!sensorsGrid) return;
  
  try {
    const sensors = appData.sensorMonitoring.leakDetectionSensors;
    
    sensorsGrid.innerHTML = sensors.map(sensor => {
      const statusClass = sensor.status === 'normal' ? 'optimal' : 
                          sensor.status === 'alert' ? 'warning' : 'critical';
      const statusIcon = sensor.status === 'normal' ? '✅' : 
                         sensor.status === 'alert' ? '⚠️' : '🚨';
      
      return `
        <div class="temperature-sensor-card status-${statusClass}">
          <div class="sensor-header">
            <div class="sensor-icon">🚨</div>
            <div class="sensor-info">
              <h4>${sensor.location}</h4>
              <span class="sensor-status ${statusClass}">${statusIcon} ${sensor.status}</span>
            </div>
          </div>
          <div class="sensor-metrics">
            ${sensor.lastDetection ? `
              <div class="sensor-metric">
                <span class="sensor-label">Last Detection</span>
                <span class="sensor-value">${new Date(sensor.lastDetection).toLocaleString()}</span>
              </div>
            ` : ''}
            ${sensor.alert ? `
              <div class="sensor-alert">
                <span class="alert-icon">⚠️</span>
                <span class="alert-text">${sensor.alert}</span>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');
  } catch (error) {
    console.error('Error rendering leak detection sensors:', error);
  }
}

// Enhanced Sensor Monitoring with tabs
function initSensorTabs() {
  const sensorTabBtns = document.querySelectorAll('.sensor-tab-btn');
  sensorTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sensorTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const sensorType = btn.dataset.sensorType;
      
      // Hide all grids
      document.getElementById('temperatureSensorsGrid').classList.add('hidden');
      document.getElementById('humiditySensorsGrid').classList.add('hidden');
      document.getElementById('leakSensorsGrid').classList.add('hidden');
      
      // Show selected grid
      if (sensorType === 'temperature') {
        document.getElementById('temperatureSensorsGrid').classList.remove('hidden');
      } else if (sensorType === 'humidity') {
        document.getElementById('humiditySensorsGrid').classList.remove('hidden');
        renderHumiditySensors();
      } else if (sensorType === 'leak') {
        document.getElementById('leakSensorsGrid').classList.remove('hidden');
        renderLeakDetectionSensors();
      }
    });
  });
}

// Forecast Reliability Indicators
function renderForecastReliability() {
  const indicatorDiv = document.getElementById('forecastReliabilityIndicator');
  if (!indicatorDiv) return;
  
  try {
    const activeRange = document.querySelector('.time-range-btn.active')?.dataset.range || '1month';
    const projection = appData.savingsProjections[activeRange];
    if (!projection || !projection.forecastReliability) return;
    
    const reliability = projection.forecastReliability;
    const reliabilityClass = reliability.status === 'reliable' ? 'reliable' : 
                            reliability.status === 'moderate' ? 'moderate' : 'unreliable';
    
    indicatorDiv.innerHTML = `
      <div class="reliability-indicator ${reliabilityClass}">
        <div class="reliability-header">
          <span class="reliability-icon">${reliability.status === 'reliable' ? '✅' : reliability.status === 'moderate' ? '⚠️' : '⚠️'}</span>
          <span class="reliability-label">Forecast Reliability</span>
          <span class="reliability-confidence">${reliability.confidence}%</span>
        </div>
        ${reliability.warning ? `
          <div class="reliability-warning">
            <span class="warning-icon">⚠️</span>
            <span class="warning-text">${reliability.warning}</span>
          </div>
        ` : ''}
        <div class="reliability-method">
          <span class="method-label">Method:</span>
          <span class="method-value">${reliability.method.replace('_', ' ')}</span>
        </div>
      </div>
    `;
  } catch (error) {
    console.error('Error rendering forecast reliability:', error);
  }
}

// ESG Compliance Reporting
function renderESGCompliance() {
  const templatesGrid = document.getElementById('esgTemplatesGrid');
  const checklistDiv = document.getElementById('complianceChecklist');
  
  if (templatesGrid) {
    try {
      const templates = appData.esgCompliance.reportTemplates;
      templatesGrid.innerHTML = templates.map(template => `
        <div class="esg-template-card">
          <h4>${template.name}</h4>
          <p class="template-type">${template.type}</p>
          <div class="template-suitable">
            <span>Suitable for:</span>
            ${template.suitableFor.map(purpose => `<span class="purpose-tag">${purpose.replace('_', ' ')}</span>`).join('')}
          </div>
          <button class="btn btn--primary btn--sm" onclick="generateESGReport('${template.id}')">
            <span>Generate Report</span>
          </button>
        </div>
      `).join('');
    } catch (error) {
      console.error('Error rendering ESG templates:', error);
    }
  }
  
  if (checklistDiv) {
    try {
      const checklist = appData.esgCompliance.complianceChecklist;
      checklistDiv.innerHTML = `
        <div class="checklist-section">
          <h4>Regulatory Compliance</h4>
          <ul>
            ${Object.entries(checklist.regulatory).map(([key, value]) => `
              <li>
                <span class="check-icon">${value ? '✅' : '❌'}</span>
                <span>${key.replace('_', ' ').toUpperCase()}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <div class="checklist-section">
          <h4>Certifications</h4>
          <ul>
            ${Object.entries(checklist.certifications).map(([key, value]) => `
              <li>
                <span class="check-icon">${value ? '✅' : '❌'}</span>
                <span>${key.replace('_', ' ').toUpperCase()}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <div class="checklist-section">
          <h4>Data Verification</h4>
          <ul>
            ${Object.entries(checklist.data_verification).map(([key, value]) => `
              <li>
                <span class="check-icon">${value ? '✅' : '❌'}</span>
                <span>${key.replace('_', ' ')}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    } catch (error) {
      console.error('Error rendering compliance checklist:', error);
    }
  }
}

function generateESGReport(templateId) {
  showLoading();
  setTimeout(() => {
    hideLoading();
    showToast(`ESG Report ${templateId} generated successfully`);
  }, 2000);
}

// Integration Management
function renderIntegrationManagement() {
  const healthSummary = document.getElementById('integrationHealthSummary');
  const integrationsGrid = document.getElementById('integrationsGrid');
  
  if (healthSummary) {
    try {
      const health = appData.integrationManagement.connectionHealth;
      healthSummary.innerHTML = `
        <div class="health-metric">
          <span class="health-label">Total Integrations</span>
          <span class="health-value">${health.total}</span>
        </div>
        <div class="health-metric healthy">
          <span class="health-label">Connected</span>
          <span class="health-value">${health.connected}</span>
        </div>
        <div class="health-metric warning">
          <span class="health-label">Warning</span>
          <span class="health-value">${health.warning}</span>
        </div>
        <div class="health-metric unhealthy">
          <span class="health-label">Unhealthy</span>
          <span class="health-value">${health.unhealthy}</span>
        </div>
      `;
    } catch (error) {
      console.error('Error rendering integration health:', error);
    }
  }
  
  if (integrationsGrid) {
    try {
      const integrations = appData.integrationManagement.integrations;
      integrationsGrid.innerHTML = integrations.map(integration => {
        const healthClass = integration.health === 'healthy' ? 'healthy' : 
                           integration.health === 'warning' ? 'warning' : 'unhealthy';
        const statusIcon = integration.status === 'connected' ? '✅' : '❌';
        
        return `
          <div class="integration-card ${healthClass}">
            <div class="integration-header">
              <h4>${integration.name}</h4>
              <span class="integration-status ${integration.status}">${statusIcon} ${integration.status}</span>
            </div>
            <div class="integration-details">
              <div class="detail-item">
                <span class="detail-label">Type:</span>
                <span class="detail-value">${integration.type.toUpperCase()}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Health:</span>
                <span class="detail-value ${healthClass}">${integration.health}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Last Sync:</span>
                <span class="detail-value">${new Date(integration.lastSync).toLocaleString()}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Data Sources:</span>
                <span class="detail-value">${integration.dataSources.join(', ')}</span>
              </div>
              ${integration.warnings ? `
                <div class="integration-warnings">
                  ${integration.warnings.map(w => `<span class="warning-badge">⚠️ ${w}</span>`).join('')}
                </div>
              ` : ''}
              ${integration.errors ? `
                <div class="integration-errors">
                  ${integration.errors.map(e => `<span class="error-badge">❌ ${e}</span>`).join('')}
                </div>
              ` : ''}
            </div>
            <div class="integration-actions">
              <button class="btn btn--outline btn--sm" onclick="editIntegration('${integration.id}')">
                <span>Edit</span>
              </button>
              <button class="btn btn--outline btn--sm" onclick="testIntegration('${integration.id}')">
                <span>Test</span>
              </button>
            </div>
          </div>
        `;
      }).join('');
    } catch (error) {
      console.error('Error rendering integrations:', error);
    }
  }
}

function editIntegration(integrationId) {
  showToast(`Editing integration ${integrationId}`);
}

function testIntegration(integrationId) {
  showLoading();
  setTimeout(() => {
    hideLoading();
    showToast(`Integration ${integrationId} test completed`);
  }, 2000);
}

// Enhanced Contract Management
function renderEnhancedContractManagement() {
  renderContractLockinRisk();
  renderContractCriteria();
  renderContractNegotiations();
}

function renderContractLockinRisk() {
  const div = document.getElementById('contractLockinRisk');
  if (!div) return;
  
  try {
    const contracts = appData.enhancedContractManagement.currentContracts;
    div.innerHTML = contracts.map(contract => `
      <div class="contract-card">
        <div class="contract-header">
          <h4>${contract.provider}</h4>
          <span class="contract-type">${contract.type}</span>
        </div>
        ${contract.lockInPeriod.enabled ? `
          <div class="lockin-period ${contract.lockInPeriod.daysRemaining < 90 ? 'warning' : ''}">
            <div class="lockin-header">
              <span class="lockin-label">Lock-in Period</span>
              <span class="lockin-days">${contract.lockInPeriod.daysRemaining} days remaining</span>
            </div>
            <div class="lockin-details">
              <span>Ends: ${new Date(contract.lockInPeriod.endDate).toLocaleDateString()}</span>
              <span>Early Termination Fee: €${contract.lockInPeriod.earlyTerminationFee.toLocaleString()}</span>
            </div>
            ${contract.lockInPeriod.warning ? `
              <div class="lockin-warning">⚠️ ${contract.lockInPeriod.warning}</div>
            ` : ''}
          </div>
        ` : ''}
        <div class="risk-profile">
          <h5>Risk Profile</h5>
          <div class="risk-scores">
            ${Object.entries(contract.riskProfile).filter(([key]) => key !== 'overall').map(([key, value]) => {
              const label = key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
              const displayValue = value.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
              const valueClass = value.includes('very_low') ? 'very-low' :
                                value === 'low' ? 'low' :
                                value === 'medium' ? 'medium' :
                                value === 'high' ? 'high' : value.replace(/_/g, '-');
              return `
              <div class="risk-score">
                <span class="risk-label">${label}</span>
                <span class="risk-value risk-${valueClass}">${displayValue}</span>
              </div>
            `;
            }).join('')}
            <div class="risk-score overall">
              <span class="risk-label">Overall</span>
              <span class="risk-value risk-${contract.riskProfile.overall}">${contract.riskProfile.overall.charAt(0).toUpperCase() + contract.riskProfile.overall.slice(1)}</span>
            </div>
          </div>
        </div>
        <div class="vendor-risk">
          <h5>Vendor Risk Profile</h5>
          <div class="vendor-details">
            <span>Credit Rating: ${contract.vendorRiskProfile.creditRating}</span>
            <span>Risk Score: ${contract.vendorRiskProfile.riskScore}/100</span>
            <span>Market Position: ${contract.vendorRiskProfile.marketPosition}</span>
          </div>
        </div>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error rendering contract lock-in and risk:', error);
  }
}

function renderContractCriteria() {
  const div = document.getElementById('contractCriteriaBuilder');
  if (!div) return;
  
  try {
    const criteria = appData.enhancedContractManagement.contractCriteria;
    div.innerHTML = `
      <div class="criteria-form">
        <div class="form-group">
          <label>Max MW</label>
          <input type="number" class="form-control" value="${criteria.maxMW.min}" min="${criteria.maxMW.min}" max="${criteria.maxMW.max}">
          <span>Preferred: ${criteria.maxMW.preferred}</span>
        </div>
        <div class="form-group">
          <label>Renewable %</label>
          <input type="number" class="form-control" value="${criteria.renewablePercent.min}" min="${criteria.renewablePercent.min}" max="${criteria.renewablePercent.max}">
          <span>Preferred: ${criteria.renewablePercent.preferred}%</span>
        </div>
        <div class="form-group">
          <label>Max Price per kWh</label>
          <input type="number" step="0.001" class="form-control" value="${criteria.pricePerKWh.max}">
          <span>Preferred: €${criteria.pricePerKWh.preferred}</span>
        </div>
        <div class="form-group">
          <label>Reliability</label>
          <input type="number" class="form-control" value="${criteria.reliability.min}" min="0" max="100">
          <span>Preferred: ${criteria.reliability.preferred}%</span>
        </div>
        <div class="form-group">
          <label>Sustainability Certifications</label>
          <div class="certifications-list">
            ${criteria.sustainabilityCertifications.map(cert => `
              <label><input type="checkbox" checked> ${cert}</label>
            `).join('')}
          </div>
        </div>
        <div class="form-group">
          <label>Max Vendor Risk Score</label>
          <input type="number" class="form-control" value="${criteria.vendorRiskMax}">
        </div>
        <div class="form-group">
          <label>Lock-in Period</label>
          <input type="number" class="form-control" value="${criteria.lockInPeriod.maxDays}" max="${criteria.lockInPeriod.maxDays}">
          <span>Preferred: ${criteria.lockInPeriod.preferredDays} days</span>
        </div>
        <button class="btn btn--primary" onclick="saveContractCriteria()">Save Criteria</button>
      </div>
    `;
  } catch (error) {
    console.error('Error rendering contract criteria:', error);
  }
}

function saveContractCriteria() {
  showToast('Contract criteria saved successfully');
}

function renderContractNegotiations() {
  const div = document.getElementById('contractNegotiations');
  if (!div) return;
  
  try {
    const negotiations = appData.enhancedContractManagement.contractNegotiations;
    div.innerHTML = negotiations.map(negotiation => `
      <div class="negotiation-card">
        <div class="negotiation-header">
          <h4>${negotiation.provider}</h4>
          <span class="negotiation-status ${negotiation.status}">${negotiation.status.replace('_', ' ')}</span>
        </div>
        <div class="negotiation-details">
          <span>Started: ${new Date(negotiation.startDate).toLocaleDateString()}</span>
          <span>Last Update: ${new Date(negotiation.lastUpdate).toLocaleDateString()}</span>
        </div>
        <div class="negotiation-proposals">
          <h5>Proposals</h5>
          ${negotiation.proposals.map(proposal => `
            <div class="proposal-item">
              <span class="proposal-date">${new Date(proposal.date).toLocaleDateString()}</span>
              <span class="proposal-type">${proposal.type}</span>
              <p>${proposal.details}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error rendering contract negotiations:', error);
  }
}

// Deployment Configuration
function renderDeploymentConfiguration() {
  const div = document.getElementById('deploymentConfigContent');
  if (!div) return;
  
  try {
    const config = appData.deploymentConfiguration;
    div.innerHTML = `
      <div class="deployment-config-form">
        <div class="form-group">
          <label>Deployment Mode</label>
          <select class="form-control" id="deploymentMode">
            ${config.availableModes.map(mode => `
              <option value="${mode.id}" ${mode.id === config.mode ? 'selected' : ''}>${mode.name}</option>
            `).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Network Access</label>
          <select class="form-control" id="networkAccess">
            <option value="isolated" ${config.networkAccess.type === 'isolated' ? 'selected' : ''}>Isolated</option>
            <option value="limited" ${config.networkAccess.type === 'limited' ? 'selected' : ''}>Limited</option>
            <option value="full" ${config.networkAccess.type === 'full' ? 'selected' : ''}>Full</option>
          </select>
        </div>
        <div class="form-group">
          <label>
            <input type="checkbox" ${config.networkAccess.externalApiAccess ? 'checked' : ''}> 
            External API Access
          </label>
        </div>
        <div class="form-group">
          <label>Data Storage Location</label>
          <select class="form-control" id="dataStorageLocation">
            <option value="local" ${config.dataStorage.location === 'local' ? 'selected' : ''}>Local</option>
            <option value="cloud" ${config.dataStorage.location === 'cloud' ? 'selected' : ''}>Cloud</option>
            <option value="hybrid" ${config.dataStorage.location === 'hybrid' ? 'selected' : ''}>Hybrid</option>
          </select>
        </div>
        <div class="form-group">
          <label>
            <input type="checkbox" ${config.dataStorage.backupEnabled ? 'checked' : ''}> 
            Backup Enabled
          </label>
        </div>
        <div class="form-group">
          <label>Data Retention (days)</label>
          <input type="number" class="form-control" value="${config.dataStorage.retentionDays}">
        </div>
        <div class="form-group">
          <label>
            <input type="checkbox" ${config.security.encryption === 'enabled' ? 'checked' : ''}> 
            Encryption Enabled
          </label>
        </div>
        <div class="form-group">
          <label>
            <input type="checkbox" ${config.security.auditLogging ? 'checked' : ''}> 
            Audit Logging
          </label>
        </div>
        <button class="btn btn--primary" onclick="saveDeploymentConfiguration()">Save Configuration</button>
      </div>
    `;
  } catch (error) {
    console.error('Error rendering deployment configuration:', error);
  }
}

function saveDeploymentConfiguration() {
  showToast('Deployment configuration saved successfully');
}
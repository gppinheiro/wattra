// Enhanced Application Data with Portugal & Spain Context
const appData = {
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
      "carbonReduction": 5200
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
      "carbonReduction": 31200
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
      "carbonReduction": 62400
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
      "carbonReduction": 132800
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
      "carbonReduction": 367200
    }
  },
  // CHANGE 1: Energy Providers data with Fixed vs Market pricing
  "energyProviders": [
    {
      "id": 1,
      "name": "EDP Renewables",
      "type": "Solar",
      "country": "Portugal",
      "logo": "☀️",
      "fixedPrice": 0.045,
      "marketPrice": 0.048,
      "reliability": 98.5,
      "renewablePercent": 100,
      "capacity": 1200,
      "isBestValue": false
    },
    {
      "id": 2,
      "name": "Iberdrola Wind", 
      "type": "Wind",
      "country": "Spain",
      "logo": "💨",
      "fixedPrice": 0.052,
      "marketPrice": 0.055,
      "reliability": 96.8,
      "renewablePercent": 100,
      "capacity": 800,
      "isBestValue": false
    },
    {
      "id": 3,
      "name": "REN Grid",
      "type": "Grid", 
      "country": "Portugal",
      "logo": "⚡",
      "fixedPrice": 0.095,
      "marketPrice": 0.089,
      "reliability": 99.8,
      "renewablePercent": 35,
      "capacity": 2000,
      "isBestValue": false
    },
    {
      "id": 4,
      "name": "Galp Energy Storage",
      "type": "Battery",
      "country": "Portugal", 
      "logo": "🔋",
      "fixedPrice": 0.038,
      "marketPrice": 0.041,
      "reliability": 94.2,
      "renewablePercent": 0,
      "capacity": 500,
      "isBestValue": true
    }
  ],
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
      renderContracts();
      renderSustainability();
      renderWorkload();
      renderReports();
      renderUserProfile();
      translatePage();
      
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
    // FIXED: Tab navigation with proper event handling
    const navTabs = document.querySelectorAll('.nav-tab');
    console.log('Found nav tabs:', navTabs.length);
    
    navTabs.forEach((tab, index) => {
      const tabId = tab.dataset.tab;
      console.log(`Setting up nav tab ${index}: ${tabId}`);
      
      tab.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Tab clicked:', tabId);
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
  console.log('Switching to tab:', tabId);
  
  try {
    // Clear all active states first
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
      tab.classList.remove('active');
    });
    
    // Set active tab
    const activeTab = document.querySelector(`[data-tab="${tabId}"]`);
    if (activeTab) {
      activeTab.classList.add('active');
      console.log('Activated tab button:', tabId);
    }
    
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
      content.classList.remove('active');
    });
    
    // Show target tab content
    const targetTab = document.getElementById(`${tabId}-tab`);
    if (targetTab) {
      targetTab.classList.add('active');
      console.log('Showing tab content:', `${tabId}-tab`);
      
      // Render specific content based on tab - FIXED
      setTimeout(() => {
        try {
          if (tabId === 'contracts') {
            renderContracts();
          } else if (tabId === 'workload') {
            renderWorkload();
          } else if (tabId === 'user-profile') {
            renderUserProfile();
          } else if (tabId === 'reports') {
            updateSavingsProjection();
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
          console.error('Error rendering tab content:', error);
        }
      }, 150);
      
      showToast(`Navigated to ${tabId.replace('-', ' ')}`);
    } else {
      console.error('Target tab content not found:', `${tabId}-tab`);
    }
  } catch (error) {
    console.error('Error switching tabs:', error);
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
  const translations = appData.translations[currentLanguage];
  
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (translations[key]) {
      element.textContent = translations[key];
    }
  });
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
    animateValue('totalConsumption', data.consumption, '', true, ' kWh');
    animateValue('energyCost', data.cost, '€', true);
    animateValue('carbonEmissions', data.emissions, '', true, ' kg CO₂');
    animateValue('currentProduction', data.production, '', true, ' kW');
    
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
    renderCostBreakdownChart();
    renderEnergyMixChart();
    renderSustainabilityForecastChart();
  } catch (error) {
    console.error('Error rendering charts:', error);
  }
}

// Cost Breakdown Chart
function renderCostBreakdownChart() {
  const ctx = document.getElementById('costBreakdownChart');
  if (!ctx) return;
  
  try {
    if (charts.costBreakdown) {
      charts.costBreakdown.destroy();
    }
    
    charts.costBreakdown = new Chart(ctx.getContext('2d'), {
      type: 'line',
      data: {
        labels: getTimeLabels(),
        datasets: [
          {
            label: 'Energy Costs',
            data: getEnergyBreakdownData(),
            borderColor: '#1FB8CD',
            backgroundColor: 'rgba(31, 184, 205, 0.1)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Infrastructure',
            data: getInfrastructureBreakdownData(),
            borderColor: '#FFC185',
            backgroundColor: 'rgba(255, 193, 133, 0.1)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Maintenance',
            data: getMaintenanceBreakdownData(),
            borderColor: '#B4413C',
            backgroundColor: 'rgba(180, 65, 60, 0.1)',
            tension: 0.4,
            fill: true
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
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return '€' + value.toLocaleString();
              }
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error rendering cost breakdown chart:', error);
  }
}

// Energy Mix Chart
function renderEnergyMixChart() {
  const ctx = document.getElementById('energyMixChart');
  if (!ctx) return;
  
  try {
    const solarCurrent = 1240;
    const windCurrent = 680;
    const gridCurrent = 487.7;
    
    if (charts.energyMix) {
      charts.energyMix.destroy();
    }
    
    charts.energyMix = new Chart(ctx.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Solar Power', 'Wind Power', 'Grid Supply'],
        datasets: [{
          data: [solarCurrent, windCurrent, gridCurrent],
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
                return `${context.label}: ${context.parsed.toFixed(1)} kW (${percentage}%)`;
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
    if (charts.costBreakdown) {
      charts.costBreakdown.data.labels = getTimeLabels();
      charts.costBreakdown.data.datasets[0].data = getEnergyBreakdownData();
      charts.costBreakdown.data.datasets[1].data = getInfrastructureBreakdownData();
      charts.costBreakdown.data.datasets[2].data = getMaintenanceBreakdownData();
      charts.costBreakdown.update('active');
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

// CHANGE 1: Render Available Contracts Table
function renderContracts() {
  console.log('Rendering contracts with table...');
  
  const contractsTableBody = document.getElementById('contractsTableBody');
  if (!contractsTableBody) {
    console.log('Contracts table body not found');
    return;
  }
  
  try {
    contractsTableBody.innerHTML = appData.energyProviders.map(provider => `
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
        <td>${provider.reliability}%</td>
        <td>${provider.renewablePercent}%</td>
        <td>${provider.capacity} kW</td>
        <td>
          ${provider.isBestValue ? '<div class="best-value-badge">BEST VALUE</div>' : ''}
        </td>
      </tr>
    `).join('');
    
    console.log('Contracts table rendered successfully');
  } catch (error) {
    console.error('Error rendering contracts table:', error);
  }
}

function renderSustainability() {
  console.log('Sustainability section rendered');
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
          ${task.status === 'Running' ? '<button class="btn btn--sm btn--secondary">Pause</button>' : ''}
          ${task.status === 'Queued' ? '<button class="btn btn--sm btn--primary">Start</button>' : ''}
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
          <button class="btn btn--primary btn--sm" onclick="implementRecommendation(${rec.id})">Implement</button>
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
function implementRecommendation(recId) {
  showLoading();
  setTimeout(() => {
    hideLoading();
    showToast(`Recommendation ${recId} implementation started`);
  }, 1500);
}

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
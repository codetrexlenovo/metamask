// /** @type {import('tailwindcss').Config} */
// import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
// import type { Config, PluginAPI } from 'tailwindcss/types/config';
// import tailwindCssAnimate from 'tailwindcss-animate';

// function addVariablesForColors({ addBase, theme }: PluginAPI) {
//   const allColors = flattenColorPalette(theme('colors'));

//   // Ensure `newVars` is typed correctly as a CSS variable object
//   const newVars: Record<string, string> = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => {
//       // Ensure that `val` is a valid CSS value (usually a string)
//       const varName = `--${key}`;
//       return [varName, String(val)]; // Ensure the value is cast to a string
//     })
//   );

//   // Add the new variables to the root
//   addBase({
//     ':root': newVars,
//   });
// }


// // function addNestedChild({ addVariant, e }: PluginAPI) {
// //   // Typing the callback properly
// //   addVariant('child-group-hover', ({ modifySelectors, separator }: { modifySelectors: (fn: (opts: { className: string }) => void) => void, separator: string }) => {
// //     modifySelectors(({ className }: { className: string }) => {
// //       return `.group .group:hover .${e(`child-group-hover${separator}${className}`)}`;
// //     });
// //   });
// // }


// // function addNestedChild({ addVariant, e }: PluginAPI) {
// //   // Define the variant with addVariant
// //   addVariant('child-group-hover', ({ className, modifySelectors, separator }) => {
// //     // Modify the selectors using modifySelectors
// //     modifySelectors(({ className }) => {
// //       return `.group .group:hover .${e(`child-group-hover${separator}${className}`)}`;
// //     });
// //   });
// // }

  
// const config: Config = {
//   darkMode: ['class'],
//   content: [
//     './pages/**/*.{js,jsx,ts,tsx}',
//     './components/**/*.{js,jsx,ts,tsx}',
//     './app/**/*.{js,jsx,ts,tsx}',
//     './src/**/*.{js,jsx,ts,tsx}',
//   ],
//   prefix: '',
//   theme: {
//   	extend: {
//   		variants: {
//   			extend: {
//   				textColor: ['child-group-hover']
//   			}
//   		},
//   		boxShadow: {
//   			input: '`0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`'
//   		},
//   		colors: {
//   			border: 'hsl(var(--border))',
//   			input: 'hsl(var(--input))',
//   			ring: 'hsl(var(--ring))',
//   			background: 'hsl(var(--background))',
//   			foreground: 'hsl(var(--foreground))',
//   			primary: {
//   				DEFAULT: 'hsl(var(--primary))',
//   				foreground: 'hsl(var(--primary-foreground))'
//   			},
//   			secondary: {
//   				DEFAULT: 'hsl(var(--secondary))',
//   				foreground: 'hsl(var(--secondary-foreground))'
//   			},
//   			destructive: {
//   				DEFAULT: 'hsl(var(--destructive))',
//   				foreground: 'hsl(var(--destructive-foreground))'
//   			},
//   			muted: {
//   				DEFAULT: 'hsl(var(--muted))',
//   				foreground: 'hsl(var(--muted-foreground))'
//   			},
//   			accent: {
//   				DEFAULT: 'hsl(var(--accent))',
//   				foreground: 'hsl(var(--accent-foreground))'
//   			},
//   			popover: {
//   				DEFAULT: 'hsl(var(--popover))',
//   				foreground: 'hsl(var(--popover-foreground))'
//   			},
//   			card: {
//   				DEFAULT: 'hsl(var(--card))',
//   				foreground: 'hsl(var(--card-foreground))'
//   			},
//   			chart: {
//   				'1': 'hsl(var(--chart-1))',
//   				'2': 'hsl(var(--chart-2))',
//   				'3': 'hsl(var(--chart-3))',
//   				'4': 'hsl(var(--chart-4))',
//   				'5': 'hsl(var(--chart-5))'
//   			}
//   		},
//   		borderRadius: {
//   			lg: 'var(--radius)',
//   			md: 'calc(var(--radius) - 2px)',
//   			sm: 'calc(var(--radius) - 4px)'
//   		},
//   		keyframes: {
//   			meteor: {
//   				'0%': {
//   					transform: 'rotate(215deg) translateX(0)',
//   					opacity: '1'
//   				},
//   				'70%': {
//   					opacity: '1'
//   				},
//   				'100%': {
//   					transform: 'rotate(215deg) translateX(-500px)',
//   					opacity: '0'
//   				}
//   			},
//   			'accordion-up': {
//   				from: {
//   					height: 'var(--radix-accordion-content-height)'
//   				},
//   				to: {
//   					height: '0'
//   				}
//   			},
//   			aurora: {
//   				from: {
//   					backgroundPosition: '50% 50%, 50% 50%'
//   				},
//   				to: {
//   					backgroundPosition: '350% 50%, 350% 50%'
//   				}
//   			},
//   			spotlight: {
//   				'0%': {
//   					opacity: '0',
//   					transform: 'translate(-72%, -62%) scale(0.5)'
//   				},
//   				'100%': {
//   					opacity: '1',
//   					transform: 'translate(-50%,-40%) scale(1)'
//   				}
//   			},
//   			scroll: {
//   				to: {
//   					transform: 'translate(calc(-50% - 0.5rem))'
//   				}
//   			},
//   			fadein: {
//   				'0%': {
//   					opacity: '0'
//   				},
//   				'100%': {
//   					opacity: '1'
//   				}
//   			},
//   			pulseSlow: {
//   				'0%': {
//   					opacity: '0'
//   				},
//   				'40%': {
//   					opacity: '1'
//   				},
//   				'90%': {
//   					opacity: '1'
//   				},
//   				'100%': {
//   					opacity: '0'
//   				}
//   			},
//   			'border-beam': {
//   				'100%': {
//   					'offset-distance': '100%'
//   				}
//   			}
//   		},
//   		animation: {
//   			'accordion-down': 'accordion-down 0.2s ease-out',
//   			fadein: 'fadein 1s ease-in-out 0.25s 1',
//   			'accordion-up': 'accordion-up 0.2s ease-out',
//   			aurora: 'aurora 60s linear infinite',
//   			spotlight: 'spotlight 2s ease .75s 1 forwards',
//   			'meteor-effect': 'meteor 5s linear infinite',
//   			scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
//   			'animate-pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
//   			pulseSlow: 'pulseSlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
//   			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear'
//   		}
//   	}
//   },
//   // plugins: [tailwindCssAnimate, addVariablesForColors, addNestedChild],
//   plugins: [tailwindCssAnimate, addVariablesForColors, require("tailwindcss-animate")],
// };

// export default config;


/** @type {import('tailwindcss').Config} */
// import  defaultTheme from "tailwindcss/defaultTheme";
// const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  prefix: "",
  theme: {
  	extend: {
  		variants: {
  			extend: {
  				textColor: ['child-group-hover']
  			}
  		},
  		boxShadow: {
  			input: '`0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`'
  		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			meteor: {
  				'0%': {
  					transform: 'rotate(215deg) translateX(0)',
  					opacity: '1'
  				},
  				'70%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'rotate(215deg) translateX(-500px)',
  					opacity: '0'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			aurora: {
  				from: {
  					backgroundPosition: '50% 50%, 50% 50%'
  				},
  				to: {
  					backgroundPosition: '350% 50%, 350% 50%'
  				}
  			},
  			spotlight: {
  				'0%': {
  					opacity: '0',
  					transform: 'translate(-72%, -62%) scale(0.5)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translate(-50%,-40%) scale(1)'
  				}
  			},
  			scroll: {
  				to: {
  					transform: 'translate(calc(-50% - 0.5rem))'
  				}
  			},
  			fadein: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			pulseSlow: {
  				'0%': {
  					opacity: '0'
  				},
  				'40%': {
  					opacity: '1'
  				},
  				'90%': {
  					opacity: '1'
  				},
  				'100%': {
  					opacity: '0'
  				}
  			},
  			'border-beam': {
  				'100%': {
  					'offset-distance': '100%'
  				}
  			},
  			'shiny-text': {
  				'0%, 90%, 100%': {
  					'background-position': 'calc(-100% - var(--shiny-width)) 0'
  				},
  				'30%, 60%': {
  					'background-position': 'calc(100% + var(--shiny-width)) 0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			fadein: 'fadein 1s ease-in-out 0.25s 1',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			aurora: 'aurora 60s linear infinite',
  			spotlight: 'spotlight 2s ease .75s 1 forwards',
  			'meteor-effect': 'meteor 5s linear infinite',
  			scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
  			'animate-pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			pulseSlow: 'pulseSlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
  			'shiny-text': 'shiny-text 8s infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"),addVariablesForColors,addNestedChilf],
}
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  })}
  
  function addNestedChilf({ addVariant, e }:any) {
      addVariant('child-group-hover', ({ modifySelectors, separator }:any) => {
        modifySelectors(({ className }:any) => {
          return `.group .group:hover .${e(`child-group-hover${separator}${className}`)}`;
        });
      });
    };
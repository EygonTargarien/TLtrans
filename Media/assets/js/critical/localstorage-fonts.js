"use strict";!function(s){function f(t){var e=document.createElement("style");e.rel="stylesheet",document.getElementsByTagName("head")[0].appendChild(e);try{e.innerText=t,e.innerHTML=t}catch(A){try{e.styleSheet.cssText=t}catch(t){console.warn(A),console.warn(t)}}}function i(A,e,o){var a=new s.XMLHttpRequest;a.open("GET",A),a.onload=function(){if(200<=a.status&&a.status<400){var t=a.responseText;f(t),s.localStorageSupport&&(s.localStorageWrite(e,A),s.localStorageWrite(o,t))}else console.warn("request loadExternalFont - fail")},a.send()}s.loadFontsToLocalStorage=function(t,A,e){var o=t+"-x-font-",a=o+"url",n=o+"css",l=e&&function(){if(!s.FontFace)return!1;var t="undefined"!=typeof InstallTrigger?'url("data:application/font-woff2") format("woff2")':'url(data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPMAAsAAAAACbAAAAOBAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABlYAhU4RCAooQgsIAAE2AiQDDAQgBYlfBykb+wjILgpsY9rIRchcpL+zqLG4GAoeCOXBvxxKS1CtkT13+88BREUkEwWIOopZJQqQXCRyeQL3YNCcftYasfGNOEnLagBkPwT/RVJmaopA6MkZASgX/1jgmfvWsYADwGXMg//19xpvNumUeUBplAn4nyj92cyjTe/6AVNxAxhMKKKxRh0w15rojR/gERzbLehZ+RZSQCN7MKmAXCGS2KOA9Dg9Jm8ojdFWt5wUhBTPxuEPIHNI679wQZWBCP9AHFwDQIYc9QUE6gtmdzAIBDXXdOG4cy675a4nXvvopwohDmNl7MseZe+zj63roxO9GMAIRCSxhJtqcMhxJ11wzR0PPfPWF79DGg+i66Ed3YArsVz1VJgpfdCfULWlilUmKztWtkeAL++/POXLvS/jCAaVRGJIrMWImBCTYmWsi21xBuIeAHEtbsSdeAD88WFWVBuGORRCFilGKSbO1JdIZSV1ilmNovI1r71euv/thbdAINj3eZ7ZoP/FZcXg5bBR08y5Z6RFvia9RrEMBOPrpgnkawQAIE+sgQSBPORywH5z574FoBciQMj0IoBMkT4EkKtlMAEkOFKgpy1Z6LS/1FAVAZFymXK3NShQtb1wIYqvsAjfuBjF/9gSLCoiIcXiSKZmLI/kWlaVCY4UmNYBWYiFSq3qvyzNl63Mt6wsR6GmKs/WQ21VM9sN9VTdncv6frlBHHhvbMhNwuFDbgbjq7GFbIVxe7/4iXvgtq+yOL+yOG5Z7qTKy9HSQzucjcvWY8uOXgHy4zN/Q6Y3VG0rl30bfMmTX1lnyqnkAeqCNCOKbAbLaiE+FYt+Z51e8xIrNK230/usiXWRPsKvr6asR2ciB6l0xSpP33hMy+gPkx1cho/ycIpyNcznYP6scD70UA7FaKgM7RzML+f384d+hdv5nfycccpSdAZKpYNLrY0p4/IyQMX5UiimbNwMkIkkUfyUeR4PHLCZLDlZer8uS5dRoNN4ZKtlyvPyQUIj6QT+flk2jgHJDJHoxCg1xdfwKfgqxE3lh7SajQk5pvkazNB5dBQ/7YjFlgUGjsmBorMFqowfyFkayON+xkyt+MwswiYGGYhyJKZABuen1uqhNm2LgMmmLqi4ViM6Yxvn3yxr0RkdY7QEUUusuS2TlDbTsDS42f6xPDyj20EVUBqGm5eRkcfkUG1A1XbzEAEAIJ9+FhkA) format("woff2")',A=new s.FontFace("t",t,{});return A.load().catch(function(){}),"loading"===A.status||"loaded"===A.status}()?e:A;if(s.localStorageSupport){var r=s.localStorage[a],c=s.localStorage[n];c&&r===l?f(c):i(l,a,n)}else i(l,a,n)}}(window);
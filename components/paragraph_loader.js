
        // Paste the JavaScript code here
        window.addEventListener('DOMContentLoaded', (event) => {
            console.log('The DOM is fully loaded, now fetching content...');
            
            fetch('./components/introduction.html')
                .then(response => response.text())
                .then(htmlString => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(htmlString, 'text/html');

                    // Mapping source ID (in intro file) to target ID (in index.html)
                    const mapping = {
                        'title-content': 'title-content-here',
                        'bio-content': 'bio-content-here',
                        'android-summary':'android-summary-here',
                        'kaggle-summary':'kaggle-summary-here'
                    };

                    for (const [source, target] of Object.entries(mapping)) {
                        const srcEl = doc.getElementById(source);
                        const tarEl = document.getElementById(target);
                        if (srcEl && tarEl) {
                            tarEl.innerHTML = srcEl.innerHTML;
                        }
                    }
                    //fill now:
                    const nameSlot = document.getElementById('name-content')
                    if (nameSlot) {
                        // siteConfig came from config.js file:
                        nameSlot.innerText = siteConfig.ownerName
                    }

                    //icons:
                    siteConfig.apps.forEach(
                        app => {
                            const iconElement = document.getElementById(app.id)
                            if (iconElement){
                                iconElement.src = app.iconPath;
                                iconElement.alt = app.name + " Icon";
                            }

                        }
                    )
                    

                })
                .catch(err => console.error("Script error:", err));

        });
// news filter function 

function updateNewsVisibility() {
    const activeFilters = Array.from(document.querySelectorAll('.filter-checkbox'))
      .filter(cb => cb.checked)
      .map(cb => cb.id); // ["exhibitions", "conference"]

    document.querySelectorAll('.news-item').forEach(item => {
      const category = item.getAttribute('data-category');

      if (activeFilters.length === 0 || activeFilters.includes(category)) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  }

  document.querySelectorAll('.custom-box').forEach(box => {
    box.addEventListener('click', () => {
      const targetId = box.getAttribute('data-target');
      const checkbox = document.getElementById(targetId);

      checkbox.checked = !checkbox.checked;
      box.classList.toggle('checked', checkbox.checked);

      updateNewsVisibility(); 
    });
  });

  
  // history cursor image when hover

  document.querySelectorAll('.event-box').forEach(box => {
    const imgPath = box.getAttribute('data-img');
    const hoverDiv = box.querySelector('.hover-image');
    console.log('Box:', box, 'Image:', imgPath); // DEBUG

    if (imgPath && hoverDiv) {
      hoverDiv.style.backgroundImage = `url('${imgPath}')`;
      hoverDiv.style.backgroundSize = 'cover';
      hoverDiv.style.backgroundPosition = 'center';
    }
  });



// typeface size function

document.querySelectorAll('.typeface-box').forEach(box => {
  const slider = box.querySelector('.size-slider');
  const preview = box.querySelector('.typeface-preview');
  const valueLabel = box.querySelector('.size-value');

  if (slider && preview && valueLabel) {
    slider.addEventListener('input', () => {
      const newSize = slider.value;
      preview.style.fontSize = newSize + 'px';
      valueLabel.textContent = `${newSize} PX`;
    });
  }
});
  


// typeface korean keyboard

// Track active preview
document.querySelectorAll('.typeface-preview').forEach(box => {
  box.addEventListener('focus', () => {
    document.querySelectorAll('.typeface-preview').forEach(b => b.classList.remove('active-preview'));
    box.classList.add('active-preview');
  });
});

// Keyboard input logic
document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('click', () => {
    const activeBox = document.querySelector('.typeface-preview.active-preview');
    if (activeBox) {
      if (key.classList.contains('space')) {
        activeBox.innerText += ' ';
      } else if (key.classList.contains('delete')) {
        activeBox.innerText = activeBox.innerText.slice(0, -1);
      } else {
        activeBox.innerText += key.innerText;
      }
    }
  });
});

// typefaces
// dunkelsans
(function(d) {
  var config = {
    kitId: 'smz6llz',   // Your own kit ID
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),
  tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;
  h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';
  tk.async=true;tk.onload=tk.onreadystatechange=function(){
    a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;
    f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}
  };
  s.parentNode.insertBefore(tk,s)
})(document);


// jjblackrose
(function(d) {
  var config = {
    kitId: 'smz6llz',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),
  tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;
  h.className+=" wf-loading";
  tk.src='https://use.typekit.net/'+config.kitId+'.js';
  tk.async=true;
  tk.onload=tk.onreadystatechange=function(){
    a=this.readyState;
    if(f||a&&a!="complete"&&a!="loaded") return;
    f=true;
    clearTimeout(t);
    try { Typekit.load(config) } catch(e) {}
  };
  s.parentNode.insertBefore(tk,s)
})(document);

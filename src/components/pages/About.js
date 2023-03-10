import React from 'react';
import '../../styles/About.css';
import me from '../../images/me.png';

export default function About() {
  return (
    <section id="aboutme">
      <header>
        <h2>About Me</h2>
      </header>
      <article class="section-content">
        <img src={me} alt="Tori Booker" class="avatar" />
        <div class="bio">
          <p>Aenean tristique ex sapien, non pharetra ipsum tincidunt non. Nulla bibendum ligula in sem dictum, id porttitor velit mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse fermentum enim et risus rutrum, id fermentum arcu ornare. Vivamus imperdiet ex et fermentum mollis. Mauris in quam vel erat mollis tincidunt et vel magna.</p>
          <p>Suspendisse nec urna enim. Duis ut eleifend neque. Vestibulum non nunc facilisis, tempus enim eu, interdum velit. Integer euismod neque ac ligula tincidunt, id interdum urna faucibus. Fusce luctus convallis tempus. Maecenas et dolor vehicula, sollicitudin tellus vel, volutpat erat. Vivamus efficitur, risus vitae sagittis vestibulum, nulla nisi suscipit turpis, eu ultricies lectus odio placerat eros. Mauris luctus lectus at porta sagittis.</p>
        </div>
      </article>
    </section>
  );
}
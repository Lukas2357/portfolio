---
layout: default
title: Projects
---

<div class="intro">
  <h1> Data Science and Software Projects </h1>
  Below you will find a list of my data science related projects. Click on the project for more details.
</div>

<div class="projects">
{% for project in site.data.projects %}
  <div class="project">
    <a href="{{ site.baseurl }}/projects/{{ project.title | slugify }}">
      <div class="project-title-image-container">
        <img class="project-image" src="{{ site.baseurl }}/assets/images/{{ project.image }}" alt="{{ project.title }} image" />
      </div>
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
    </a>
  </div>
{% endfor %}
</div>


---
layout: page-w-banner
title: Projects
bannerTitle: Ravencoin Projects
bannerImage: /assets/img/pages/exchanges/exchange-banner.jpg
permalink: /projects/
---

<div class="page-content">
  <h2>Current Ravencoin Projects</h2>
    <p></p>
    <div class="flex flex-wrap">
      {% assign sorted_projects = site.data.projects | sort: "name" %}
      {% for project in sorted_projects %}
      <div class="bg-grey-lighter max-w-sm rounded overflow-hidden shadow-md hover:by-grey">
          <h3>{{ project.name }}</h3>          
          <p>{{ project.description }}</p>
          <h4>Project Websites</h4>
          <ul>
          {% for site in project.project_sites %}
          <li><a href="{{ site.url }}">{{ site.name }}</a></li>
          {% endfor %}
          </ul>
          <h4>Project Roadmap</h4>
          <ul>
          {% for value in project.roadmap %}
          <li>{{ value.name }} -- {{ value.value }}</li>
          {% endfor %}
          </ul>
          <h4>Get In Contact</h4>
          <ul>
          {% for site in project.social %}
          <li><a href="{{ site.url }}">{{ site.name }}</a></li>
          {% endfor %}
          </ul>
        </div>
      {% endfor %}
    </div>
</div>

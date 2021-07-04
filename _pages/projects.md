---
layout: page-w-banner
title: Projects
bannerTitle: Ravencoin Projects
bannerImage: /assets/img/pages/exchanges/exchange-banner.jpg
permalink: /projects/
---

{% assign sorted_projects = site.data.projects | sort: "name" %}

<div class="wrapper mt-16 pb-20">
  <h2>Current Ravencoin Community Projects</h2>
    <p>These projects are all created and ran by the Ravencoin community.</p>
      <h3>Table of Contents</h3>
      <ul>
      {% for project in sorted_projects %}
          <li><a href="#{{ project.name }}">{{ project.name }}</a></li>
      {% endfor %}
      </ul>
      <br><br>
      {% for project in sorted_projects %}
          <h3 id="{{ project.name }}">{{ project.name }}</h3>          
          <p>{{ project.description }}</p>
          <h4>Project Websites</h4>
          <ul>
          {% for site in project.project_sites %}
          <li><a href="{{ site.url }}">{{ site.name }}</a></li>
          {% endfor %}
          </ul>
          {% if project contains "roadmap" %}
          <h4>Project Roadmap</h4>
          <ul>
          {% for value in project.roadmap %}
          <li>{{ value.name }} -- {{ value.value }}</li>
          {% endfor %}
          </ul>
          {% endif %}
          {% if project contains "social" %}
          <h4>Get In Contact</h4>
          <ul>
          {% for site in project.social %}
          <li><a href="{{ site.url }}">{{ site.name }}</a></li>
          {% endfor %}
          </ul>
          {% endif %}
          <br><br>
      {% endfor %}
  <br><br><br><br>
  <p>Want to add your project? Make a PR to <a href="https://github.com/RavenProject/ravenproject.github.io/blob/master/_data/projects.yml">this webpage's data</a> on github.</p>
</div>

import React from 'react'
import logen from "../imges/logen.png";

export default function Header() {
  return (
    <div>
             <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
  <img src={logen} alt="dfd" width="60px" className="logen" />

    <a class="navbar-brand" href="#"><div className="s">اليمن</div>سيد</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>

    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
</button>
    </form>
      <ul class="navbar-nav">
      
    
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          مسلسلات انمي
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">مسلسلات انمي 2020</a></li>
            <li><a class="dropdown-item" href="#">مسلسلات انمي 2021</a></li>
            <li><a class="dropdown-item" href="#">مسلسلات انمي 2022</a></li>
            <li><a class="dropdown-item" href="#">مسلسلات انمي 2023</a></li>
            <li><a class="dropdown-item" href="#">مسلسلات انمي 2024</a></li>

          </ul>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          مسلسلات رمضان
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">مسلسلات رمضان 2020</a></li>
            <li><a class="dropdown-item" href="#">مسلسلات رمضان 2021</a></li>
            <li><a class="dropdown-item" href="#">مسلسلات رمضان 2022</a></li>
            <li><a class="dropdown-item" href="#">مسلسلات رمضان 2023</a></li>
            <li><a class="dropdown-item" href="#">مسلسلات رمضان 2024</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          مسلسلات          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">مسلسلات عربي</a></li>
            <li><a class="dropdown-item" href="#">مسلسلات تركي</a></li>
            <li><a class="dropdown-item" href="#">مسلسلات اجنبي</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
افلام          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">فلام عربي</a></li>
            <li><a class="dropdown-item" href="#">فلام تركي</a></li>
            <li><a class="dropdown-item" href="#">فلام اجنبي</a></li>
          </ul>
        </li>
        
      </ul>
      
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">الرئيسية</a>
        </li>
        <button className="button-link">لمضاف حديثا<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-counterclockwise locen" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
</svg></button>

    </div>
  </div>
</nav>
    </div>
  )
}

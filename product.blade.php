@extends('frontend.layouts.main')
@section('page-title', 'E-commerce - Product_details')
@section('main-section')
    <div class="mt-2">
        <h1 class="bg-secondary p-3 text-center mb-4">Product name</h1>
        <div class="container">
            <div class="product-details row">
                <div class="product-images text-center col-lg-6">
                    <a href="{{ asset('frontend/uploads/lockscreen1.jpg') }}" target="_blank">
                        <img src="{{ asset('frontend/uploads/lockscreen1.jpg') }}" class="rounded img-fluid" alt="Room Image">
                    </a>
                </div>
                <div class="product-info container col-lg-6">
                    <div>
                        <h2>Brand name</h2>
                        <p class="description text-justify">Description goes here. Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Aperiam nostrum eum ea at sed velit qui doloribus suscipit voluptatibus. Modi
                            quibusdam illo consequuntur accusantium atque sequi quaerat ipsam nam porro temporibus, iste tempora
                            placeat adipisci esse amet vitae corrupti aliquam animi. Est, sit ipsam corporis nulla maxime ut
                            voluptatem minima.</p>
                        <ul class="amenities">
                            <li>Category: Book/Perfume/Electronic
                            </li>
                            <li>Price: $200
                            </li>
                            <li>Other informations</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

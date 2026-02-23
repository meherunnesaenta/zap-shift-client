import React, { useRef } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';
export const Coverage = () => {
    const position = [23.6850, 90.3563];
    const serviceCenters = useLoaderData();
    const mapref=useRef();

    const handleSearch = (e) => {
        e.preventDefault();
        const location = e.target.location.value;
        const dist = serviceCenters.find(center => center.district.toLowerCase() === location.toLowerCase());
        if (dist) {
           const cord =[dist.latitude, dist.longitude];
           mapref.current.flyTo(cord, 12);
        }
        else {
            alert('No service center found in that location. Please try another district.');
        }
    }
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-10'>we are available in 64 districts of Bangladesh</h1>
            <div>
                {/* search  */}
                <form onSubmit={handleSearch}>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" className="grow" name="location" placeholder="Search" />

                    </label>
                </form>
            </div>
            <div className='border w-full h-[800px] mt-10'>
                <MapContainer
                    center={position}
                    zoom={7}
                    scrollWheelZoom={false}
                    className='w-full h-[800px]'
                    ref={mapref}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        serviceCenters.map((center, index) => <Marker key={index} position={[center.latitude, center.longitude]}>
                            <Popup>
                                <div>
                                    <h2 className='text-xl font-bold'>{center.district}</h2>
                                    <p>{center.covered_area.join(', ')}</p>
                                </div>
                            </Popup>
                        </Marker>)
                    }
                </MapContainer>,
            </div>
        </div>
    )
}

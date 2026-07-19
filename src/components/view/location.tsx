import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";

const Location = () => {

    const position: [number, number] = [-6.778503, 106.784587]

  return (
    <section className="bg-primary">
        <div className='mx-auto max-w-6xl w-[95%] py-16 relative flex flex-col gap-4'>
            <h1 className="text-center font-bold text-3xl md:text-4xl text-white">Lokasi Kami</h1>
                <MapContainer center={position} zoom={16} scrollWheelZoom={false} className="h-[500px] w-full rounded-xl static z-10">
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={position}>
                        <Popup>
                        RS Bhakti Medicare
                        </Popup>
                    </Marker>
                </MapContainer>
        </div>
    </section>
  )
}

export default Location
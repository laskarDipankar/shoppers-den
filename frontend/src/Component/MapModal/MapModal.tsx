import { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  CircleMarker,
  useMapEvents,
} from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import { AddBox } from "@mui/icons-material";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  coordinates: any;
  page: String;
  getCoords: any;
  // onClose: () => void;
}

const MapModal = ({ open, setOpen, coordinates, page, getCoords }: Props) => {
  //   const [state, setstate] = useState(open);
  const [position, setPosition] = useState<any>(null);

  const handleLocation = () => {
    getCoords(position);
    setOpen(false);
  };

  // console.log(position);

  //   return <h1>notting to see</h1>;

  //   // return position === null
  //   //   ? null
  //   //   : (console.log(position),
  //   //     (
  //   //       <Marker
  //   //         position={position}
  //   //         icon={
  //   //           new Icon({
  //   //             iconUrl: markerIconPng,
  //   //             iconSize: [25, 41],
  //   //             iconAnchor: [10, 41],
  //   //             popupAnchor: [2, -40],
  //   //           })
  //   //         }
  //   //       >
  //   //         <Popup>You are here</Popup>
  //   //       </Marker>
  //   //     ));
  // };

  const HandleClickMap = () => {
    const map = useMapEvents({
      click(e) {
        // console.log(e, "hello");

        setPosition(e.latlng);

        handleLocation();
        map.locate();
      },
      locationfound(e) {
        map.flyTo(e.latlng, map.getZoom());
        // console.log(position, "lead");
      },
    });
    return null;
  };

  return (
    <>
      <div className="map">
        <Modal
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          sx={{
            background: "rgba(255,255,255,0.6)",
            // opacity: 0.6,
          }}
        >
          <Box
            sx={{
              width: "60vw",
              height: "60vh",
              background: "white",
              margin: "auto",
              marginTop: "20vh",
            }}
          >
            <div>
              <Box>
                {position === null ? (
                  <Typography>
                    Double click on the location to set the longitude and
                    latidute of the location, once you have set the location the
                    map will close automatically{" "}
                  </Typography>
                ) : (
                  <Box>
                    {/* <h4>{position.lat}</h4>
                    <h4>{position.lng}</h4> */}

                    <Typography>Latitude: {position.lat}</Typography>
                    <Typography>Longitude: {position.lng}</Typography>
                  </Box>
                )}
                <MapContainer
                  style={{ height: "60vh", width: "60vw" }}
                  center={[coordinates.lat, coordinates.lng]}
                  zoom={13}
                  scrollWheelZoom={false}
                  dragging={true}
                >
                  <TileLayer
                    // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {/* <CircleMarker
                    center={[coordinates.lat, coordinates.lng]}
                    pathOptions={{ color: "red" }}
                    radius={50}
                  /> */}
                  <HandleClickMap />
                  {/* {position === null ? null : ( */}
                  <Marker
                    // position={position}
                    position={
                      position === null
                        ? [coordinates.lat, coordinates.lng]
                        : [position.lat, position.lng]
                    }
                    icon={
                      new Icon({
                        iconUrl: markerIconPng,
                        iconSize: [25, 41],
                        iconAnchor: [10, 41],
                        popupAnchor: [2, -40],
                      })
                    }
                    draggable={true}
                  >
                    <Popup>
                      {page === "home" ? (
                        <>
                          <span>location</span>
                        </>
                      ) : (
                        <span>click on the location to set the marker</span>
                      )}
                    </Popup>
                  </Marker>
                </MapContainer>
              </Box>
            </div>
            <Button
              onClick={() => {
                setOpen(false);
              }}
            >
              Close
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default MapModal;

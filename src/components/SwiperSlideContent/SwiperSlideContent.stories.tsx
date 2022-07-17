/* eslint-disable */
import { SwiperSlideContent } from "./SwiperSlideContent";

export default {
    title: "SwiperSlideContent",
};

export const Default = () => (
    <SwiperSlideContent
        isTop={true}
        media={{
            tags: ["Psicológico", "De suspenso", "Serie de sci-fi"],
            img: "https://occ-0-3010-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUcZob4DqWB00CmdlQEjugtCk6JFo3OVgWixkgacfbxecBLBJUP0khAwbe1VZImi-epRRy-zfdEukRbLSCLwg8MPy1BgGaHsZt289XdVuMAFxGBm8taYOdQ3O_veT2gHCBtg.jpg?r=f5f",
        }}
        idx={2}
    />
);

Default.story = {
    name: "default",
};

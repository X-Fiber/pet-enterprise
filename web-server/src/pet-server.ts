import { initiator, setServices } from "proton";
import { ECatService } from "~business-logic";

setServices([ECatService]);

initiator.start();

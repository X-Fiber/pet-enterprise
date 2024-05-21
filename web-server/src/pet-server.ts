import { initiator, setServices } from "~packages";
import { ECatService } from "~business-logic";

setServices([ECatService]);

initiator.start();

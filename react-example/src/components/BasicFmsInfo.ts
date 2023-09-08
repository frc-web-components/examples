import React, { useEffect, useState } from "react";
import { createComponent } from "@lit-labs/react";
import BasicFmsInfo from "@frc-web-components/fwc/components/basic-fms-info";
import { useNt4 } from "../networktables/NT4Provider";

export default createComponent({
  tagName: "frc-basic-fms-info",
  elementClass: BasicFmsInfo,
  react: React,
});

export interface FmsInfo {
  eventName: string;
  fmsControlData: number;
  gameSpecificMessage: string;
  isRedAlliance: boolean;
  matchNumber: number;
  matchType: number;
  relayNumber: number;
  stationNumber: number;
}

const fmsInfoNtKeyPropertyMap = {
  EventName: "eventName",
  FMSControlData: "fmsControlData",
  GameSpecificMessage: "gameSpecificMessage",
  IsRedAlliance: "isRedAlliance",
  MatchNumber: "matchNumber",
  MatchType: "matchType",
  ReplayNumber: "replayNumber",
  StationNumber: "stationNumber",
};

const DEFAULT_FMS_INFO: FmsInfo = {
  eventName: "",
  fmsControlData: 0,
  gameSpecificMessage: "",
  isRedAlliance: false,
  matchNumber: 0,
  matchType: 0,
  relayNumber: 0,
  stationNumber: 0,
};

export function useFmsInfo(key: string): FmsInfo {
  const { store } = useNt4();
  const [fmsInfo, setFmsInfo] = useState<FmsInfo>({ ...DEFAULT_FMS_INFO });

  useEffect(() => {
    return store.subscribe(
      "NetworkTables",
      key,
      () => {
        const info: FmsInfo = { ...DEFAULT_FMS_INFO };
        const source = store.getSource("NetworkTables", key);
        if (source) {
          const children = source.getChildren();
          const type = source.getChildren()[".type"]?.getSourceValue();
          if (type === "FMSInfo") {
            Object.entries(fmsInfoNtKeyPropertyMap).forEach(
              ([ntKey, property]) => {
                if (ntKey in children) {
                  info[property] = children[ntKey].getSourceValue();
                }
              }
            );
          }
        }
        setFmsInfo(info);
      },
      true
    );
  }, []);

  return fmsInfo;
}

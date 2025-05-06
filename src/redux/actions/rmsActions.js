import { SET_RMS_METRIC_DATA } from "../types/rmsTypes";

export const setRmsMetricData = (metricData) => ({
  type: SET_RMS_METRIC_DATA,
  payload: metricData,
});

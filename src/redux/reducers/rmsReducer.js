import { SET_RMS_METRIC_DATA } from "../types/rmsTypes";

const initialState = {
    role: null, // "super_admin", "admin", "recruiter", "client"
  
    meta: {
      isLoading: false,
      error: null,
      lastUpdated: null,
    },
  
    summaryKPIs: {
      totalOpenPositions: 0,
      totalNewApplications: 0,
      totalUpcomingInterviews: 0,
      totalHiresThisMonth: 0,
      offerAcceptanceRate: 0, // %
    },
  
    candidatePipeline: {
      candidatesPerStage: {
        applied: 0,
        interviewing: 0,
        offered: 0,
        hired: 0,
      },
      stageDropOffRate: {
        appliedToInterviewing: 0, // %
        interviewingToOffered: 0,
        offeredToHired: 0,
      },
    },
  
    recruitmentEfficiency: {
      timeToHire: 0, // in days
      timeToFirstInterview: 0, // in days
    },
  
    recruiterPerformance: {
      interviewToOfferRatio: 0, // %
      recruiterActivity: [], // [{ recruiterId, applicationsReviewed, interviewsScheduled, offersMade }]
    },
  
    candidateQuality: {
      resumeToInterviewRatio: 0, // %
    },
  
    diversityInclusion: {
      applicantDiversity: {
        gender: {}, // e.g., { male: 40, female: 55, nonBinary: 5 }
        ethnicity: {},
      },
      hiredDiversity: {
        gender: {},
        ethnicity: {},
      },
    },
  
    sourceInsights: {
      topSources: [], // [{ source: "LinkedIn", count: 120, conversionRate: 12 }]
    },
  
    jobDomainMetrics: {
      topHiringDomains: [], // [{ domain: "React", openPositions: 10 }]
    },
  
    filters: {
      timeRange: "last_30_days", // or custom range like { from: date, to: date }
      clientId: null,
      recruiterId: null,
      jobId: null,
    },
  };
  

const rmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RMS_METRIC_DATA:
      return {
        ...state,
        metricData: action.payload,
      };
    default:
      return state;
  }
};

export default rmsReducer;

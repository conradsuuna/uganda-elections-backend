import express from "express";
import { 
    findPollingStationWinners,
    pollingStationsByDistrictName,
    districts,
    getAny, 
    pollingStationsWinnersByDistrict,
    getParliamentaryPresidentialPercentagesByParty,
    getPresidentialVoterTurnoutTrend
} from "../controllers/electionsController.js";
const router = express.Router();


router.post('/get_polling_stations', pollingStationsByDistrictName)
router.get('/get_districts', districts)
router.post('/get_polls_winners', findPollingStationWinners)
router.post('/get_polling_stations_by_district', pollingStationsWinnersByDistrict)
router.post('/getParliamentaryPresidentialPercentagesByParty', getParliamentaryPresidentialPercentagesByParty)
router.post('/get_turnout_trend', getPresidentialVoterTurnoutTrend)

router.get('/', getAny)

export default router;
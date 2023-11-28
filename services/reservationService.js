const ReservationModel = require('../database/models/reservationModel');

class ReservationService{

  static async addReservation({plannerId, when, time, where1, userId}){
    
    //이미 예약한 유저면 막기
    const reservation = ReservationModel.findOneReservationUserId({ id: userId });
    if (reservation) {
      const errorMessage = "이미 예약하신 내역이 있습니다.";
      return { errorMessage };
    }

    const newReservation = {plannerId, when, time, where1, userId};
		
    //예약테이블에 INSERT INTO
		const createNewReservation = await ReservationModel.createReservation({newReservation});
		return createNewReservation
  }

  static async getReservationByUserId({id}){
    const reservationData = await ReservationModel.findOneReservationUserId2({id});
    // if (reservationData.length === 0) {
    //   return [];
    // }
    return reservationData;
  }

}

module.exports = ReservationService;
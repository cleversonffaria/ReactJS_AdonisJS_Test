"use strict";
const Demand = use("App/Models/Demand");

class DemandController {
  async store({ request, response, auth, params }) {
    try {
      const { status_demand, ...data } = request.all();
      const demand = await Demand.create({
        user_id: auth.user.id,
        status_demand: true,
        product_id: params.id,
        ...data
      });
      return demand;
    } catch (error) {
      return response.status(401).send({ Error: `Erro:${error.message}` });
    }
  }
}

module.exports = DemandController;

import { Request, Response } from "express";
import knex from "./../database/connection";

class ItemsController {
	async index(request: Request, response: Response) {
		const items = await knex("items").select("*");
		const serializedItems = items.map((item) => {
			return {
				ID: item.id,
				name: item.title,
				imageUrl: `http://localhost:3333/uploads/${item.image}`,
			};
		});
		return response.json(serializedItems);
	}
}

export default ItemsController;

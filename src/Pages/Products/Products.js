import React from "react";
import "./Products.css";
import heart from "./heart.svg";
import { Link } from "react-router-dom";
import inventory from "../../data/inventory";

export default function Products() {
	return (
		<div className='container-products'>
			{inventory.map((item) => (
				<Link
					to={{
						pathname: `/produits/${item.title
							.replace(/\s+/g, "")
							.trim()}`,
					}}
					key={item.id}
				>
					<div className='bloc-card'>
						<div className='product-card'>
							<div className='visual-aspect'>
								<img
									src={
										process.env.PUBLIC_URL +
										`/images/${item.img}.png`
									}
									alt=''
									className='img-product'
								/>
								<div className='like-container'>
									<img src={heart} alt="icone j'aime" />
								</div>
							</div>
							<div className='info'>
								<p>{item.title}</p>
								<p>Prix : {item.price}€</p>
							</div>
						</div>
                        <div className="back-card"></div>
					</div>
				</Link>
			))}
		</div>
	);
}

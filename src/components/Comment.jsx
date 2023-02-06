import { ThumbsUp, Trash } from 'phosphor-react'

import styles from './Comment.module.css'

export function Comment() {
	return (
		<div className={styles.comment}>
			<img src="https://github.com/mgckaled.png" alt="avatar do usuário" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Marcel Kaled</strong>
							<time
								title="06 de Fevereiro às 15:10h"
								dateTime="2023-02-06 15:10:00"
							>
								Cerca de 1h atrás
							</time>
						</div>

						<button title="Deletar comentário">
							<Trash size={24} />
						</button>
					</header>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
						libero earum eius pariatur at molestiae fugit voluptatibus nam cum
						sunt deserunt ut in laudantium optio, quibusdam alias odio! Odit,
						vitae. 👏👏
					</p>
				</div>

				<footer>
					<button>
						<ThumbsUp />
						Aplaudir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	)
}

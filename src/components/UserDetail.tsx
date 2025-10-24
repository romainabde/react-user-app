import { use, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { User } from "../model/User";
import { getUserById } from "../data/UserApi";
import "./styles/UserDetail.css";

function UserDetail() {
    const {id} = useParams();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
        getUserById(parseInt(id))
            .then(data => {
                setUser(data);
            })
            .catch(err => {
                setError("Utilisateur non trouvé : " +err.message);
            })
            .finally(() => {
                setLoading(false);
            });
        }
    }, [id]);

    if(loading){
        return <p>Chargement...</p>;
    }

    if(error){
        return <p>{error}</p>;
    }

    if (!user) {
        return <p>Impossible de récupérer les informations de l'utilisateur.</p>;
    }

    return (
        <div className="user-detail">
            <section className="user-header">
                <div className="user-img">
                    <img src={user.image} alt={user.username}/>
                </div>

                <div className="general-info">
                    <h2>Informations générales</h2>
                    <p>{user.firstName} {user.lastName}</p>
                    <p>{user.age} ans, né(e) le {user.birthDate}</p>
                    <p>Sexe : {user.gender}</p>
                    <p>Rôle : {user.role}</p>
                    <button className="back-button" onClick={() => window.history.back()}>Retour</button>
                </div>
            </section>

            <section className="user-body">
                <section className="top-section other-info">
                    <div className="contact">
                        <h2>Contact</h2>
                        <p><strong>Email :</strong> {user.email}</p>
                        <p><strong>Téléphone :</strong> {user.phone}</p>
                        <p><strong>Adresse :</strong> {user.address.address}, {user.address.city}, {user.address.postalCode}, {user.address.state}</p>
                    </div>

                    <div className="bank-info">
                        <h2>Infos. bancaires</h2>
                        <p><strong>Type de carte :</strong> {user.bank.cardType}</p>
                        <p><strong>Numéro de carte :</strong> {user.bank.cardNumber}</p>
                        <p>Expire le {user.bank.cardExpire}</p>
                        <p><strong>IBAN :</strong> {user.bank.iban}</p>
                    </div>

                    <div className="company-info">
                        <h2>Infos. sur l'entreprise</h2>
                        <p><strong>Entreprise :</strong> {user.company.name}</p>
                        <p><strong>Poste :</strong> {user.company.title}</p>
                        <p><strong>Adresse :</strong> {user.company.address.address}, {user.company.address.city}, {user.company.address.postalCode}, {user.company.address.state}</p>
                    </div>
                </section>

                <section className="bottom-section other-info">
                    <div className="security-info">
                        <h2>Informations de sécurité</h2>
                        <p><strong>Ein :</strong> {user.ein}</p>
                        <p><strong>SSN :</strong> {user.ssn}</p>
                        <p><strong>Adresse IP :</strong> {user.ip}</p>
                        <p><strong>Mac Address :</strong> {user.macAddress}</p>
                    </div>

                    <div className="crypto-info">
                        <h2>Informations Crypto</h2>
                        <p><strong>Coin :</strong> {user.crypto.coin}</p>
                        <p><strong>Wallet :</strong> {user.crypto.wallet}</p>
                        <p><strong>Network :</strong> {user.crypto.network}</p>
                    </div>

                    <div className="sante-info">
                        <h2>Informations de santé</h2>
                        <p><strong>Groupe sanguin :</strong> {user.bloodGroup}</p>
                        <p><strong>Taille :</strong> {user.height} cm</p>
                        <p><strong>Poids :</strong> {user.weight} kg</p>
                        <p><strong>Couleur des yeux :</strong> {user.eyeColor}</p>
                        <p><strong>Cheveux :</strong> {user.hair.color}, {user.hair.type}</p>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default UserDetail;
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import { useGlobalContext } from '../context';
function Mainnav() {
	const { helpFxn, aboutFxn, homeFxn, tab, poem, choice, getPoem, changePoem,capture,download} = useGlobalContext();
	return (
		<header>
			<nav className="navbar navbar-expand-sm navbar-light bg-light">
				<a className="navbar-brand" href="#">
					<img src={logo} alt="Avatar Logo" width="100px" className="p-0" />
				</a>
				{choice && (
					<div className="navbar-nav choice-fxns">
						<li className="nav-item select">
							<span className={`nav-link`} onClick={getPoem}>
								Selectionner
							</span>
						</li>
					</div>
				)}
				<div className="">
                {poem && (
					<div className="navbar-nav poem-fxns">
						<li className="nav-item poem-fxn1">
							<span className={`nav-link`} onClick={changePoem}>
								Editer
							</span>
						</li>
						<li className="nav-item poem-fxn2" data-bs-toggle="modal" data-bs-target="#myModal">
							<span className={`nav-link`} onClick={capture}>
								Sauvegarder l'image
							</span>
						</li>

<div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header justify-content-around">
	  <button onClick={download} className="btn btn-success" data-bs-dismiss="modal">Télécharger</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fermer</button>
      </div>

      <div class="modal-body">
      </div>

      <div class="modal-footer">
        {/* <a href={`canvas.${toDataURL()}`} className="btn btn-success" download>Download</a> */}
       
      </div>

    </div>
  </div>
</div>
					</div>
				)}
                </div>
				<div className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
					<span className="navbar-toggler-icon" />
				</div>
				<div id="nav" className="collapse navbar-collapse">
					<ul className="navbar-nav">
						<li className="nav-item">
							<span className={`nav-link ${tab == 'Accueil' && 'bordered'}`} onClick={homeFxn}>
								Accueil
							</span>
						</li>
						<li className="nav-item">
							<span className={`nav-link ${tab == 'Aide' && 'bordered'}`} onClick={helpFxn}>
								Aide
							</span>
						</li>
						<li className="nav-item">
							<span className={`nav-link ${tab == 'A propos de moi' && 'bordered'}`} onClick={aboutFxn}>
								A propos de moi
							</span>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}
export default Mainnav;

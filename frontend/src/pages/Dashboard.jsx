import React from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>📊 Panel de Control</h1>
        <p>
          Bienvenido al sistema. Desde aquí puedes acceder a las secciones
          principales:
        </p>
      </header>

      <div className="dashboard-cards">
        <Link to="/entrenador" className="card">
          <div className="card-icon">🚀</div>
          <h2>Aplicación</h2>
          <p>Ir al entrenador de la aplicación.</p>
        </Link>

        <Link to="/estadisticas" className="card">
          <div className="card-icon">📈</div>
          <h2>Estadísticas</h2>
          <p>Consulta reportes y métricas.</p>
        </Link>

        <Link to="/configuracion" className="card">
          <div className="card-icon">⚙️</div>
          <h2>Configuración</h2>
          <p>Ajusta las preferencias del sistema.</p>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;

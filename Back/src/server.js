const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ticketRoutes = require('./routes/ticketRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conectar a MongoDB local
// mongoose.connect('mongodb://localhost:27017/Ticketera', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log('MongoDB se conecto!'))
//   .catch(err => console.log('No se pudo conectar', err));

// Conectar a MongoDB Atlas
mongoose.connect('mongodb+srv://celescis:celeste@cluster0.u8busiu.mongodb.net/Ticketera', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB se conecto!'))
  .catch(err => console.log('No se pudo conectar', err));

// Usar rutas
app.use('/api/tickets', ticketRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server en puerto ${PORT}`);
});

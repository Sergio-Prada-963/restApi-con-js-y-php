<?php 
ini_set("display_errors", 1);

ini_set("display_startup_errors", 1);

error_reporting(E_ALL);
require_once('../conectar.php');
class Alquilar extends Conectar{
    public function get_cliente(){
        try {
            $conectar=parent::Conexion();
            parent::set_name();
            $stm = $conectar->prepare("SELECT * FROM constructoras");
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_ASSOC);
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
    public function insert_cliente($constructora, $nitConstructora, $nombreRepre, $email, $telefono){
        $conectar=parent::Conexion();
        parent::set_name();
        $stm = "INSERT INTO constructoras(nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto) VALUES(?,?,?,?,?)";
        $stm = $conectar->prepare($stm);
        $stm->bindValue(1,$constructora);
        $stm->bindValue(2,$nitConstructora);
        $stm->bindValue(3,$nombreRepre);
        $stm->bindValue(4,$email);
        $stm->bindValue(5,$telefono);
        $stm->execute();
        return $stm->fetchAll(PDO::FETCH_ASSOC);
    }

    public function delete_cliente($id){
        $conectar=parent::conexion();
        parent::set_name();
        $stm = "DELETE FROM constructoras WHERE id_constructora=?";
        $stm = $conectar->prepare($stm);
        $stm->bindValue(1,$id);
        $stm->execute();
        return $resultado=$stm->fetchAll(PDO::FETCH_ASSOC);
    }
}
?>
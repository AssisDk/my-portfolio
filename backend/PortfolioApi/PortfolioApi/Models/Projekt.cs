namespace PortfolioApi.Models;

public class Projekt
{
    public int Id { get; set; }           
    public string Titel { get; set; }     
    public string Beskrivelse { get; set; }
    public string Status { get; set; }    // Status for projektet (f.eks. "Igangværende", "Afsluttet")
    public string Tags { get; set; }      
}